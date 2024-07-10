import express, { Request, Response } from 'express';

const app = express();

// app.com
// app/help
// app/about

app.get('/', (req: Request, res: Response) => {
    res.send("<h1>hello express</h1>");
});

app.get('/help', (req: Request, res: Response) => {
    res.send([{
        name: 'andrew',
        age: 24,
        salary: 500000
    },
    {
        name: 'sarah'
    }]);
});

app.get('/about', (req: Request, res: Response) => {
    res.send('<h1>about the page</h1>');
});

app.get('/weather', (req: Request, res: Response) => {
    res.send([{
        forecast: 'The weather is clear'
    }, {
        location: 'philadelohia'
    }]);
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is up on port ${PORT}.`);
});
