const express = require('express');

const app = express();

// app.com
// app/help
// app/about

app.get('/', (req, res) => {
    res.send("<h1>hello express</h1>");
});

app.get('/help', (req, res) => {
    res.send([{
        name:'andrew',
        age:24,
        salary:500000
    },
{
    name:'sarah'
}]);
});

app.get('/about', (req, res) => {
    res.send('<h1>about the page</h1>');
});

app.get('/weather', (req, res) => {
    res.send([{
        forecast:'The weather is clear'
    },{
        location:'philadelohia'
    }]);
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is up on port ${PORT}.`);
});
