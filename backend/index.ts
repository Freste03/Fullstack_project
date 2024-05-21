import cors from 'cors'
import express from 'express'
import * as sqlite from 'sqlite'
import sqlite3 from 'sqlite3'
import path from 'path'

const app = express()

const db = new sqlite3.Database(path.resolve(__dirname, 'test.sqlite'))

app.use(cors())

app.use(express.static(path.join(path.resolve(), 'dist')))

app.get('/accounts', (req, res) => {
    db.all('SELECT * FROM accounts', (err, rows) => {
        if (err) {
            console.error(err.message);
            res.status(500).send('Internal server error');
            return;
        }
        res.json(rows);
    });
});

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`)
})