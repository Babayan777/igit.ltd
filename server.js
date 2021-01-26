const express = require('express');
const app = express();

const nodemailer = require("nodemailer");

const PORT = process.env.PORT || 8000;




// Middleware

app.use(express.static('public'));
app.use(express.json()); 

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/public/contact.html')
})

app.get('/about.html', (req, res) => {
    res.sendFile(__dirname + '/about.html');
});

app.get('/index.html', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/product.html', (req, res) => {
    res.sendFile(__dirname + '/product.html');
});

app.get('/video.html', (req, res) => {
    res.sendFile(__dirname + '/video.html');
});

app.get('/acheivements.html', (req, res) => {
    res.sendFile(__dirname + '/acheivements.html');
});

app.get('/matzoon.html', (req, res) => {
    res.sendFile(__dirname + '/matzoon.html');
});

app.get('/curd.html', (req, res) => {
    res.sendFile(__dirname + '/curd.html');
});

app.get('/sourcream.html', (req, res) => {
    res.sendFile(__dirname + '/sourcream.html');
});

app.get('/milk.html', (req, res) => {
    res.sendFile(__dirname + '/milk.html');
});







app.post('/', (req,res) => {
    console.log(req.body);

    const transporter = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user: 'igityan.ltd@gmail.com',
            pass:'7x7budet49'
        }
    })

    const mailOptions = {
        from:req.body.email,
        to:'igityan.ltd@gmail.com',
        subject:`Message from ${req.body.email}:  ${req.body.tel}`,
        text:req.body.message
    }

    transporter.sendMail(mailOptions, (error,info) => {
        if(error){
            console.log(error);
            res.send('error');
        }
        else{
            console.log(`Email sent: ` + info.response);
            res.send('success')
        }
    })
})

app.listen(PORT, () => {
    console.log(`Server runnung on port ${PORT}`)
})

