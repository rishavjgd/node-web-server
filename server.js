const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
//using built in middleware which lets us customize the way we use the middleware


//app.use((req, res, next) => {
//    res.render('maintance.hbs');
//    next();
//});

//app.use((req, res, next) => {
//    var now = new Date();
//    var log = `${now}: ${req.method} ${req.url}`;
//    console.log(log);
//    fs.appendFile('server.log', log + '\n', (err) => {
//        if (err) {
//            console.log('Unable to append to server log');
//        }
//    });
//    next();
//});

app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
});

app.get('/', (req, res) => {
    //res.send('<h1>Hello Express</h1>');
    //res.send({
    //    name: 'Rishav',
    //    likes: [
    //        'Bikes',
    //        'Eating',
    //        'Going Out'
    //    ]
    //});

    res.render('home.hbs', {
        PageName: 'You are viewing the homepage of the project',
        renderHBS: 'this is home page',
        //todaysDate: new Date().getFullYear()
    });


});

app.get('/about', (req, res) => {
    //res.send('About the page. Just getting started');
    res.render('about.hbs', {
        PageName: 'This is the about page. Thannkyou for visiting',
        renderHBS: 'rendering the template file structure for the first time',
        //todaysDate: new Date().getFullYear()
    });

});

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: "Could not find appropriate server request"
    });
});

app.listen(3000);