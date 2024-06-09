import cors from 'cors'
import express from 'express'
import * as sqlite from 'sqlite'
import sqlite3 from 'sqlite3'
import path from 'path'

const app = express()

const db = new sqlite3.Database(path.resolve(__dirname, 'database.sqlite'))

app.use(cors())

app.use(express.static(path.join(path.resolve(), 'dist')))

app.get('/products', (req, res) => {
    db.all('SELECT * FROM Products', (err, rows) => {
        if (err) {
            console.error(err.message);
            res.status(500).send('Internal server error');
            return;
        }
        res.json(rows);
    });
});

app.get('/sortbydateproducts', (req, res) => {
    db.all('SELECT * FROM Products ORDER BY created DESC', (err, rows) => {
        if (err) {
            console.error(err.message);
            res.status(500).send('Internal server error');
            return;
        }
        res.json(rows);
    })
})

app.get('/search', (req, res) => {
    const searchQuery = req.query.search;

    db.all('SELECT * FROM Products WHERE name LIKE ?', [`%${searchQuery}%`], (err, rows) => {
        if (err) {
            console.error(err.message);
            res.status(500).send('Internal server error');
            return;
        } else {
            res.json(rows);
        }
    })
})

app.get('/product/:id/:name', (req, res) => {
    const productId = req.params.id;
    const productName = req.params.name;
    db.all('SELECT * FROM Products WHERE product_id = ? AND name = ?', [productId, productName], (err, rows) => {
        if (err) {
            console.error(err.message);
            res.status(500).send('Internal server error');
            return;
        } else {
            res.json(rows);
        }
    })
})

app.get('*', (req, res) => {
    res.sendFile(path.join(path.resolve(), 'dist', 'index.html'));
});

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`)
})