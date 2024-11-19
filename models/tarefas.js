const mongoose = require ('mongoose');
const TarefaSchema = new mongoose.Schema({ 
    name: String required: true,
    description: String,
    DueDate:{ type: Date, default: Date.now },
    OverDue: boolean
 });

module.exports = mongoose.model('Tarefas', TarefaSchema);