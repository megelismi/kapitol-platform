import express from "express";

import home from './routes/home-route';
import members from './routes/member-route';
import legislation from './routes/legislation-route';

const app = express();

app.use('/', home);
app.use('/members', members);
app.use('/legislation', legislation)


app.listen(3001, () => {
    console.log('server running on PORT 3001');
});
