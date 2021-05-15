import express from 'express';
import helmet from 'helmet';
import path from 'path';
import favicon from 'serve-favicon';
import nunjucks from 'nunjucks';
import routes from './routes.js';

const app = express();
nunjucks.configure( path.join(__dirname, 'template'), {
    autoescape: true, // xss 
    express: app
});

// middleware ( use() )
app.use(helmet());
app.use((req, res, next) => {
    console.log(`Request: ${req.url}`);
    next();
});
app.use( express.static(path.join(__dirname, 'public')) );
app.use( favicon(path.join(__dirname, 'public', 'node.png')) );
app.use( express.json() ); // content-type: application/json

app.use(routes);

/*app.get('/', (req, res) => {

    /*let html = `<h1>Accueil</h1>
    <img src="/images/node-single-event-loop.jpg" alt="node single event loop" />`;

    res.send(html);

    res.render('home/index.html');
});*/

const port = process.env.PORT || 3200;
app.listen(port, 'localhost', () => {
    console.log(`Personal Node Server is listening on http://localhost:${port}`);
    console.log('Shutdown Node Server with CRTL + C');
});
// changer le port sous windows
//      set PORT=9999   --> CMD
//      $env:PORT=9999  --> PowerShell
//      nodemon express/index.js
// changer le port sous unix
//      PORT=9999 nodemon express/index.js