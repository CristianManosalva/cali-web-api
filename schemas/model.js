const joi = require('@hapi/joi');

const modelIdSchema = joi
  .number()
  .integer()
  .min(1);
const FirstName = joi.string().min(3);
const LastName = joi.string().min(2);
const UserName = joi.string().min(3);
const Email = joi.string().email();
const gender = joi
  .string()
  .lowercase()
  .equal(['male', 'female']);
const location_model = joi.string().min(2);
const birthDate = joi.date();
const state_user = joi
  .number()
  .integer()
  .equal([1, 0]);

//Score
const scoreSchema = joi.number().equal([1, 2, 3, 4, 5]);

const createModelSchema = {
  first_name: FirstName.required(),
  last_name: LastName.required(),
  user_name: UserName.required(),
  email: Email.required(),
  gender: gender.required(),
  location_model: location_model.required(),
  birthdate: birthDate.required(),
  state_user: state_user
};

module.exports = {
  createModelSchema,
  modelIdSchema,
  scoreSchema
};
