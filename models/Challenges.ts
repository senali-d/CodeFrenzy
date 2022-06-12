const mongoose = require('mongoose')

const ChallengesSchema = new mongoose.Schema({
  title: {type: String, required: true},
  desc: {type: String, required: true},
  img: {type: String, required: true},
  level: {type: String},
  type: {type: String},
  requirements: {type: String},
  outcomes: {type: String},
  resources: {type: String},
  links: {type: String},
}, {timestamps: true});

mongoose.models = {}
export default mongoose.model('Challenge', ChallengesSchema)