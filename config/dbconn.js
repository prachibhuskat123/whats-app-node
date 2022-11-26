const mysql = require('mysql2');

const conn = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password:'password',
    database : 'eduvanzbeta'
})

conn.connect((err)=>{
    if(err)
    {
        console.log(err);
    }
    else{
        console.log('Database connected successfully');
    }
})
module.exports = conn;