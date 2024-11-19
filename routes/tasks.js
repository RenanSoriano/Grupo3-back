const express = require('express');
const { createTask, getTasks, updateTask, deleteTask } = require('../controllers/taskController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, createTask);      // Criar nova tarefa
router.get('/', authMiddleware, getTasks);        // Listar tarefas do usuário
router.put('/:id', authMiddleware, updateTask);   // Atualizar tarefa
router.delete('/:id', authMiddleware, deleteTask);// Deletar tarefa

module.exports = router;
