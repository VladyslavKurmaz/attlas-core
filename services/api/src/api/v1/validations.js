'use strict';

let Joi = require('joi');

module.exports = {
  get: {
    query: {
      depth: Joi.number().integer().min(1).max(4).default(1)
    }
  }
};