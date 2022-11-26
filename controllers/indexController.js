const { check,validationResult } = require('express-validator');
const conn = require('../config/dbconn.js');



module.exports = {
    createStudent : (req,res) =>{
        
        const errors = validationResult(req);
        if(errors.isEmpty())
        {
            const postData = req.body;
            let sql = `INSERT INTO student_info SET first_name = "${postData.first_name}", last_name="${postData.last_name}",mobile = "${postData.mobile}",email = "${postData.email}"`;
            conn.query(sql,(err,result)=>{
                if(err)console.log(err);
                else{
                    res.status(201).json({'message':'Student created successfully',data:result});
                }
            })
        }
        else{
            res.json({error:errors.mapped()});
        }
       
    }
}