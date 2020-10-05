const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');

// obtiene todo los productos
router.get('/', (req, res) => {
    
  const sql = 'SELECT * FROM product';
  
    mysqlConnection.query(sql, (err, rows, fields) => {
      if (err) throw err;
      if(rows.length > 0) {
        res.json(rows);
      }else {
        const respuesta = {'err' : true, 'mensaje' : 'no hay productos'};

        res.send(respuesta);
      }
  });
  

});

// obtiene un producto
router.get('/:id', (req, res) => {
    const { id } = req.params; 

    const sql = `SELECT * FROM product WHERE id = '${id}'`;
    
    mysqlConnection.query(sql, (err, rows, fields) => {
      if (err) throw err;
      if(rows.length > 0) {
        res.json(rows);
      }else {
        const respuesta = {'err' : true, 'mensaje' : 'No hay resultados'};

        res.send(respuesta);
      }
  });
    
});

// obtiene un producto
router.get('/categoria/:id', (req, res) => {
  const { id } = req.params; 

  const sql = `SELECT * FROM product WHERE category = '%${id}%'`;
  
  mysqlConnection.query(sql, (err, rows, fields) => {
    if (err) throw err;
    if(rows.length > 0) {
      res.json(rows);
    }else {
      const respuesta = {'err' : true, 'mensaje' : 'No hay resultados'};

      res.send(respuesta);
    }
  });
});

// buscar un producto por nombre
router.get('/producto/:name', (req, res) => {
  
  const { name } = req.params; 

  const sql = `SELECT * FROM product WHERE name like '%${name}%'`;
  
  mysqlConnection.query(sql, (err, rows, fields) => {
    if (err) throw err;
    if(rows.length > 0) {
      res.json(rows);
    }else {
      const respuesta = {'err' : true, 'mensaje' : 'No hay resultados'};

      res.send(respuesta);
    }
  });
  
});


// obtiene todo los productos
router.get('/oferta/', (req, res) => {
    
  const sql = 'SELECT * FROM product';
  
    mysqlConnection.query(sql, (err, rows, fields) => {
      if (err) throw err;
      if(rows.length > 0) {
        res.json(rows);
      }else {
        const respuesta = {'err' : true, 'mensaje' : 'no hay productos'};

        res.send(respuesta);
      }
  });
  

});


module.exports = router;