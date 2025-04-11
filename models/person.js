const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, validate: { validator: (v) => {return v >= 18;},
      message: props => `${props.value} is not a valid age!`}},
  email: { type: String, required: true,match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ , unique: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  work: { type: String, enum: ['chef', 'manager', 'waiter'] }
});

const Person = mongoose.model('Person', personSchema);

module.exports = Person;