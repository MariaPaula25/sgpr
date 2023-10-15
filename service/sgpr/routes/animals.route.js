var express = require("express");
var sqlite3 = require("sqlite3");
var router = express.Router();

router.get("/getAll", function (req, res, next) {
  let db = new sqlite3.Database("../sgpr.db");

  db.run("CREATE TABLE IF NOT EXISTS animals (identifierNumber, sex, weight, description)", (err, result) => {
    if (err) {
      console.log("err: " + err);
    }

    console.log("result: " + result);

    db.all(
      "SELECT rowId, identifierNumber, sex, weight, description FROM 'animals' LIMIT 0,100", 
      [], 
      (err, result) => {
        if (err) {
          console.log("err: " + err);
        }
    
        console.log("result: " + result);
        
        db.close();
        res.send(result);
    });
  });
});

router.get("/get/:id", function (req, res, next) {
  let db = new sqlite3.Database("../sgpr.db");

  db.run("CREATE TABLE IF NOT EXISTS animals (identifierNumber, sex, weight, description)", (err, result) => {
    if (err) {
      console.log("err: " + err);
    }

    console.log("result: " + result);

    db.get(
      `SELECT rowId, identifierNumber, sex, weight, description FROM 'animals' WHERE rowId ='${req.params.id}'`, 
      [], 
      (err, result) => {
        if (err) {
          console.log("err: " + err);
        }
    
        console.log("result: " + result);
        
        db.close();
        res.send(result);
    });
  });
});

router.post("/create", function (req, res, next) {
  let db = new sqlite3.Database("../sgpr.db");
  console.log(req.body);

  db.run("CREATE TABLE IF NOT EXISTS animals (identifierNumber, sex, weight, description)", (err, result) => {
    if (err) {
      console.log("err: " + err);
    }

    console.log("result: " + result);

    db.run(
      "INSERT INTO animals(identifierNumber, sex, weight, description) VALUES(?,?,?,?)", 
      [req.body.identifierNumber, req.body.sex, req.body.weight, req.body.description], 
      (err, result) => {
        if (err) {
          console.log("err: " + err);
        }
    
        console.log("result: " + result);

        db.close();
        res.sendStatus(200);
    });
  });
});

router.put("/edit", function (req, res, next) {
  let db = new sqlite3.Database("../sgpr.db");
  console.log(req.body);

  db.run("CREATE TABLE IF NOT EXISTS animals (identifierNumber, sex, weight, description)", (err, result) => {
    if (err) {
      console.log("err: " + err);
    }

    console.log("result: " + result);

    db.run(
      `UPDATE animals SET identifierNumber = ?, sex= ?, weight = ?, description = ?  WHERE rowId =${req.body.rowid}`, 
      [req.body.identifierNumber, req.body.sex, req.body.weight, req.body.description], 
      (err, result) => {
        if (err) {
          console.log("err: " + err);
        }
    
        console.log("result: " + result);

        db.close();
        res.sendStatus(200);
    });
  });
});

router.delete("/delete/:id", function (req, res, next) {
  let db = new sqlite3.Database("../sgpr.db");

  db.run("CREATE TABLE IF NOT EXISTS animals (identifierNumber, sex, weight, description)", (err, result) => {
    if (err) {
      console.log("err: " + err);
    }

    console.log("result: " + result);

    db.get(
      `DELETE FROM 'animals' WHERE rowId ='${req.params.id}'`, 
      [], 
      (err, result) => {
        if (err) {
          console.log("err: " + err);
        }
    
        console.log("result: " + result);
        
        db.close();
        res.sendStatus(200);
    });
  });
});

module.exports = router;
