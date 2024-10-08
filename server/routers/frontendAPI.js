const router = require('express').Router();
const Authentication = require("../models/authSchema");
const Product = require("../models/ProductSchema");

router.get("/", async (req, res) => {
    const fetchall = await Product.find({status: "publish"});
    try{
        res.status(200).json(fetchall);
    }catch(err){
        res.status(500).json({message: err.message});
    }
});

router.post("/frontendreg", async (req, res) => {
    // console.log(req.body);
    const { username, password } = req.body;
    const alreadyuser = await Authentication.exists({ username: username });
    if (alreadyuser) {
        res.status(200).json({ message: "already have an account" });
    } else {
        const authdata = new Authentication({
            username: username,
            password: password,
        });
        await authdata.save();
        res.status(201).json({ message: "successfully created account" });
    }
})

router.post("/frontendlogin", async (req, res) => {
    const { username, password } = req.body;
    const fetchData = await Authentication.findOne({ username: username });
    if (fetchData !== null) {
        if (fetchData.password === password) {
            res.status(200).json(fetchData);
        } else {
            res.status(404).json({ message: "failed to login..." });
        }
    } else {
        res.status(404).json({ message: "failed to login..." });
    }
});

router.post("/cartitems", async (req, res)=> {
    // console.log(req.body);
    const {ids} = req.body;
    const proData = await Product.find({_id: {$in: ids}});
    // console.log(proData);
    res.status(200).json(proData);
});
module.exports = router;
