let sqlite = require("sqlite3").verbose();

class crastaDB {
    constructor(){
      let db = new sqlite.Database("crastaDB.sqlite");

      db.serialize(function(){
        db.run("create table if not exists master (id INTEGER PRIMARY KEY autoincrement, contact_type text, name text, tel_number text, email text, content text)");
        db.run("create table if not exists students(name TEXT , age INT)");
        db.run("create table if not exists test3(id INTEGER PRIMARY KEY autoincrement, name TEXT , age INT)");
        console.log("DBを作成");  
      })
      db.close();

    }
    masterInsert(contact_type,name,tel_number,email,content){
      let db = new sqlite.Database("crastaDB.sqlite");
      db.serialize(function(){
        console.log("masterinsert");
        let stmt  = db.prepare("insert into master(contact_type,name,tel_number,email,content) values(?,?,?,?,?)");  
        stmt.run([contact_type,name,tel_number,email,content]);
        stmt.finalize();
      })
      db.close();
    }
    showDB(SQL){
      let db = new sqlite.Database("crastaDB.sqlite");
      db.serialize(function(){
        db.each(SQL,function(err,row){

          console.log(row);
        })
      })
      db.close();
    }
    
}
  
module.exports = crastaDB;
