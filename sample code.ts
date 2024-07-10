import express, { Request, Response } from 'express';

const app = express();

// app.com
// app/help
// app/about

app.get('', (req: Request, res: Response) => {
    res.send("<h1>hello express</h1>");
});

app.get('/help', (req: Request, res: Response) => {
    res.send('help page');
});

app.get('/about', (req: Request, res: Response) => {
    res.send('about the page');
});

app.get('/weather', (req: Request, res: Response) => {
    res.send('The weather is clear');
});

app.listen(3000, () => {
    console.log("Server is up on port 3000.");
});
