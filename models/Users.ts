const mongoose = require('mongoose')

const UsersSchema = new mongoose.Schema({
  photo: {type: String, required: true},
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  github: {type: String, required: true},
  country: {type: String, required: true},
}, {timestamps: true});

mongoose.models = {}
export default mongoose.model('User', UsersSchema)