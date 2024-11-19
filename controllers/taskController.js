const Task = require('../models/Task');

const createTask = async (req, res) => {
  const { title, description, dueDate } = req.body;

  try {
    const newTask = new Task({ title, description, dueDate, user: req.user.id });
    await newTask.save();
    res.status(201).json(newTask);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user.id });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateTask = async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedTask);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteTask = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: 'Tarefa deletada com sucesso' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { createTask, getTasks, updateTask, deleteTask };
