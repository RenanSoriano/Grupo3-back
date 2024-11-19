const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Usa a URL de conexão do MongoDB armazenada no .env
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Conectado...');
  } catch (err) {
    console.error('Erro ao conectar ao MongoDB:', err.message);
    process.exit(1); // Encerra o processo em caso de erro
  }
};

module.exports = connectDB;
