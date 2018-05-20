var amqp = require('amqplib/callback_api');
var amqpURL = 'amqp://dwcqiygt:JYPPiy8LyDgn6BRxzTItU4fq-DDkI3lk@black-boar.rmq.cloudamqp.com/dwcqiygt'

module.exports = function(cb) {
    amqp.connect(amqpURL,function(err, conn) {
      if (err) {
        throw new Error(err)
      }
      console.log("[AMQP] connected");
      cb(conn)
    })
  }