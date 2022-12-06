const bcrypt = require("bcryptjs")

module.exports = {
   
    index: function (req,res) {

        let password = "Messi10"
        let passEncriptada = bcrypt.hashSync(password, 10)

        req.session.pass = passEncriptada

        res.send("Su contraseña fue encriptada")
    
},
    password: function (req,res) {
        res.send(req.session.pass)
    }
}