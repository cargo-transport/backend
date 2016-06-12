/**
 * Booking.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    user: { model: 'user', required: true },
    source: { type: 'string', required: true },
    destination: { type: 'string', required: true },
    address: { type: 'string' },
    landmark: { type: 'string' },
    comments: { type: 'text' },
    advancedBooking: { type: 'boolean', defaultTo: false },
    bookingDate: { type: 'datetime' },
    status: {
      type: 'string',
      enum: ['pending', 'confirmed', 'loading', 'transit', 'unloading', 'completed']
    },
    locationDetails: { type: 'json' },
    dimensions: { type: 'json' },
    weight: { type: 'integer' },
    sharing: { type: 'boolean', defaultTo: false },
    preferences: { type: 'string' },
    driver: { model: 'driver' }
  }
};

