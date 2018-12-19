let cron = require('node-cron');
let express = require('express');

cron.schedule('* * * * *', () => {
    console.log('running a task every minute');
})