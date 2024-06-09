import cors from 'cors'
import express from 'express'
import * as sqlite from 'sqlite'
import sqlite3 from 'sqlite3'
import path from 'path'

const app = express()

const db = new sqlite3.Database(path.resolve(__dirname, 'database.sqlite'))

app.use(cors())

app.use(express.json());

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

app.post('/cart', (req, res) => {
    const { product_id, size } = req.body;
    


    if (!product_id || !size) {
        res.status(400).send('Missing product_id or size');
        return;
    }

    db.run('INSERT INTO OrderItems (product_id, size) VALUES (?, ?)', [product_id, size], (err) => {
        if (err) {
            console.error(err.message);
            res.status(500).send('Internal server error');
            return;
        }
        res.json({ message: 'Product added to cart' });
    });
})

app.get('/cart', (req, res) => {
    const query = `
        SELECT 
            OrderItems.id AS orderItemId, 
            Products.name, 
            Products.brand, 
            Products.description, 
            Products.price, 
            Products.stock, 
            Products.image_url, 
            OrderItems.size
        FROM OrderItems
        JOIN Products ON OrderItems.product_id = Products.product_id
    `;

    db.all(query, [], (err, rows) => {
        if (err) {
            console.error(err.message);
            res.status(500).send('Internal server error');
            return;
        }
        res.json(rows);
    })
})

app.get('/brand/:brand', (req, res) => {
    const brand = req.params.brand;
    db.all('SELECT * FROM Products WHERE brand = ?', [brand], (err, rows) => {
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