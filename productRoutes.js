const express =require('express');
const emp =require('../controller/employees')
const router = express.Router();

router
.get('/getAllEmployees', emp.getAllEmployees)
.get('/getEmployeeById/:id',  emp.getEmployeeById)
.post('/getEmployeeByEmail',  emp.getUserByEmail)
.post('/createEmployee',  emp.createProduct)
.put('/updateEmployee/:id',  emp.updateEmployee)
.delete('/deleteEmployee/:id', emp.deleteEmployee)

exports.router = router
