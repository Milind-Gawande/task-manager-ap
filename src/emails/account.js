const sgMail = require('@sendgrid/mail');

//const sendgridAPIKey = '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';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// sgMail.send({
//     to: 'milind.gawande1337@gmail.com',
//     from: 'milind.gawande1337@gmail.com',
//     subject: 'This is my first creation!',
//     text: 'I hope this one actually get to you'
// });

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'milind.gawande1337@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app. ${name} Let me know how you get along with the app`
    });
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'milind.gawande1337@gmail.com',
        subject: 'Sorry to see you go!',
        text: `Good Bye, ${name}. I hope to see you back some time soon`
    });
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}