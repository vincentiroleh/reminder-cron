require('dotenv').config();

const express = require('express');
const app = express();

const cron = require('node-cron');
const mailer = require('./helper/node-mailer');

app.get('/', (req, res) => {
    res.send('Running a task every minute');
});

// running a task every minute
try {
    cron.schedule('* * * * *', () => {
        console.log('Running task now');
    
        const email = 'example@gmail.com';
        const subject = 'Learning Reminder';
        const msg = 'Time to code!'
        mailer(email, subject, msg);
    });
} catch (error) {
    console.log(error);
}


const PORT = process.env.PORT || 4000;
app.listen(PORT, () =>
    console.log(`running a task every minute on port ${PORT}`));