const express = require('express');
const routes = express.Router();
const menuItems =  require('./../models/menu')

routes.post('/', async (req, res) => {
    const{name, price, taste, is_drink, is_veg, is_available, ingridients, num_of_sales} = req.body;
    try {
        const menudata = req.body
        const newmenuitem = new menuItems({
            name: menudata.name,
            price: menudata.price,
            taste: menudata.taste,
            is_drink: menudata.is_drink,
            is_veg: menudata.is_veg,
            is_available: menudata.is_available,
            ingridients: menudata.ingridients,
            num_of_sales: menudata.num_of_sales
        });
        const response = await newmenuitem.save()
        console.log('menu data saved');
        res.status(201).json(response);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
})

routes.get('/', async (req, res) => {
    try {
        const menuitems = await menuItems.find();
        console.log('menu data fetched');
        res.status(200).json(menuitems);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'internal server error' });
    }
});



module.exports = routes;