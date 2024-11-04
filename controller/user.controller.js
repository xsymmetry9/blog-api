// const passport = require("../configs/passport.config");
const bcrypt = require("bcryptjs");
const User = require("../db/queries");

const toHashedPassword = async (password) =>{
    const newPassword = await bcrypt.hash(password, 10);

    return newPassword;
}
exports.create = async(req, res) =>
{
    try{
        const {name, email, password} = req.body;
        if(name === "" || email === "" || password === "") {
            res.status(500).json({status: "failed", message: "Empty field"});
        };

        const hashedPassword = await toHashedPassword(password);
        
        await User.create({name: name, email: email, password: hashedPassword});

        return res.json({status: true, message: `Data has been added.`});

    } catch (err){
        res.status(500).json({status: false, message: err})
    }
}
exports.readAll = async(req, res) =>{
    try{
        const data = await User.readAll();
        res.json({status: "success", data: data});
    } catch (err){
        res.status(500).json({status: "failed", message: "Failed to read all users"});
    }
}
exports.readOne = async(req, res) => {

}

exports.deleteOne = async(req, res) =>{

}

exports.update = async(req, res) =>{

}