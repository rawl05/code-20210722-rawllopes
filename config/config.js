'use strict'

module.exports = { 
    env: process.env.SERVER_ENV || 'development',
    port: process.env.SERVER_PORT || 80,
}