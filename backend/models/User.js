//Importar o mongoose
const mongoose = require('../database/index');

//Definição do Schema (arquitetura de informação no DB para a entidade User)
const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  city: {
      type: String,
      required: true,
  },
  state: {
      type: String,
      required: true,
  }
  
});

const User = mongoose.model('User', UserSchema);

module.exports = User;