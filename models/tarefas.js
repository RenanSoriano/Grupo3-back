const mongoose = require ('mongoose');
const tarefaSchema = new mongoose.Schema({ 
    name: {type: String, required: true},
    description: String,
    DueDate:{ type: Date, default: Date.now },
    OverDue: boolean
 });

module.exports = mongoose.model('tarefas', tarefaSchema);

