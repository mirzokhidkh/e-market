const keys = require('../keys');

module.exports = function (email, token) {
    return {
        to: email,
        from: keys.EMAIL_FROM,
        subject: 'Access recovery ',
        html: `
        <h1>Did you forget password ?</h1>
        <p>If not, ignore this letter</p>
        <p>Else click the link below:</p>
        <p><a href="${keys.BASE_URL}/auth/password/${token}">Restore access</a></p>
        <hr/>
        <a href="${keys.BASE_URL}">Course store</a>  
`
    }
};