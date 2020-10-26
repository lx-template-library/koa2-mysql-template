//initData.js
const {users} =require('../model/user')
users.sync({force:true})