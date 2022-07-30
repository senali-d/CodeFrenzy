const mongoose = require('mongoose')

const ChallengesSchema = new mongoose.Schema({
  title: {type: String, required: true},
  desc: {type: String, required: true},
  img: {type: String, required: true},
  level: {type: String, required: true},
  type: {type: String, required: true},
  requirements: [{type: String, required: true}],
  outcomes: [{type: String, default: ''}],
  resources: [{type: String, default: ''}],
  attachment: {type: String, default: ''},
}, {timestamps: true});

mongoose.models = {}
export default mongoose.model('Challenge', ChallengesSchema)