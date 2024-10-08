const router = require("express").Router();
const Authentication = require("../models/authSchema");
const Product = require("../models/ProductSchema");

//  it's all admin api's

router.get("/", async (req, res) => {
    res.send("Your account.");
});

router.post("/login", async (req, res) => {
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

router.post("/addproduct", async (req, res) => {
    // console.log(req.body);
    const { name, desc, price } = req.body;
    const addData = new Product({
        name: name,
        desc: desc,
        price: price,
        status: "unpublish"
    });
    try {
        await addData.save();
        res.status(200).json(addData);
    } catch (e) {
        res.status(404).json({ message: e.message });
    }
});

router.get("/products", async (req, res) => {
    const fetchData = await Product.find();
    // console.log(fetchData);
    try {
        res.status(200).json(fetchData);
    } catch (e) {
        res.status(404).json({ message: e.message });
    }
});

router.get("/:id", async (req, res) => {
    const id = req.params.id;
    const fetchSingle = await Product.findById(id);
    // console.log(fetchSingle);
    try {
        res.status(200).json(fetchSingle);
    } catch (e) {
        res.status(404).json({ message: e.message });
    }
});

router.put("/:id", async (req, res) => {
    // console.log(req.params.id);
    const id = req.params.id;
    const { name, desc, price, status } = req.body;
    console.log(req.body);
    console.log(id);
    await Product.findByIdAndUpdate(id, {
        name: name,
        desc: desc,
        price: price,
        status: status
    });
    res.status(200).json({ message: "successfully updated" });
});

module.exports = router;