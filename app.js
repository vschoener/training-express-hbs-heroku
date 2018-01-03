
const express = require('express');
const hbs = require('hbs');


var app = express();

hbs.registerHelper('getFullName', () => {
    return 'Vincent Schoener';
});

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname+'/views/partials');

// Log middleware
app.use((req, res, next) => {
    let now = new Date().toString();

    console.log(`${now}: ${req.method} ${req.url}`);
    next();
});

// Middleware for maintenance
// app.use((req, res, next) => {
//     res.render('maintenance.hbs');
// });

app.use(express.static(__dirname +'/public'));

app.get('/', (req, res) => {
    // res.send("Hi");
    res.render('home.hbs', {
        jobTitle: "Backend Engineer"
    });
});

app.listen(8000);
