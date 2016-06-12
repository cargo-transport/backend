/**
 * Driver.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name: { type: 'string', required: true },
    password: { type: 'string' },
    mobile: { type: 'string', required: true },
    vehicleRegNo: { type: 'string', required: true },
    age: { type: 'integer' },
    sex: { type: 'string', defaultTo: 'male', enum: ['male', 'female'] }
    // avatar: { type: 'string' }
  }
};

