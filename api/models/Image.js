// var AWS = require('aws-sdk');
// var async = require('async');
// var _ = require('lodash');

/**
 * Image.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    key: { type: 'string', required: true },
    user: { model: 'user', required: true },
    toJSON: function toJSON() {
      return _.assign({}, this, {
        src: 'http://' + sails.config.s3.bucket.media + '/' + this.key
      });
    }
  }
};

