const express = require('express');
const routes = express.Router();
const Person = require('./../models/person')

routes.post('/', async (req, res) => {
    const{ name, age, email, phone, address, work } = req.body;
    try {
        const data = req.body
        const newPerson = new Person({
            name: data.name,
            age: data.age,
            email: data.email,
            phone: data.phone,
            address: data.address,
            work: data.work
        });
        const response = await newPerson.save();
        console.log('data saved');
        res.status(201).json(response);
    } 
    catch (error) {
        res.status(400).json({ error: error.message });
    }
})

routes.get('/', async (req, res) => {
    try {
        const persons = await Person.find();
        console.log('data fetched');
        res.status(200).json(persons);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'internal server error' });
    }
})

routes.get('/:worktype',async (req, res) =>{
    try{
        const worktype = req.params.worktype;
        if(worktype === 'chef' || worktype === 'manager' || worktype === 'waiter'){
            const response = await Person.find({ work: worktype });
            console.log('data fetched based on worktype');
            res.status(200).json(response);     
           
        }else{
        res.status(400).json({ error: 'invalid worktype' });    

       } ;
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'internal server error' });
    }
});

routes.put('/:id',async (req,res)=>{
    try{
        const personID = req.params.id;
        const updatedPersonData = req.body;
        const response = await Person.findByIdAndUpdate(personID, updatedPersonData, 
            { new: true, runValidators: true });
        if(!response){
            return res.status(404).json({ error: 'person not found' });
        }
        console.log('data updated');            
        res.status(200).json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'internal server error' });           
    }
})

routes.delete('/:id', async (req,res)=> {
    try{
        const personID = req.params.id;
        const response = await Person.findByIdAndDelete(personID);
        if (! response){
            return res.status(404).json({ error: 'person not found' }); 
            }
          console.log('data deleted');  
          res.status(200).json({ message: 'person deleted successfully' });

    }catch (error) {
        console.log(error);
        res.status(500).json({ error: 'internal server error' }); 
    }               
})
    

module.exports = routes