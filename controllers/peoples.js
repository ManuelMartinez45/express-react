const peopleRouter = require('express').Router()
const People = require('../models/people')

// test route
peopleRouter.get('/', (req,res) => {
    res.send('Hello World')
})

// Index Route
peopleRouter.get('/people', async (req,res) => {
    try {
        res.json(await People.find({}))
    } catch (error){
        res.status(400).json(error)
    }
})

// Create Router
peopleRouter.post('/people', async (req,res) => {
    try{
        res.json(await People.create(req.body))
    } catch(error){
        res.status(400).json(error)
    }
})

// Delete Route
peopleRouter.delete('/people/:id', async (req,res) => {
    try {
        res.json(await People.findByIdAndDelete(req.params.id))
      } catch (error) {
        res.status(400).json(error)
      }
})

// Update Route
peopleRouter.put('/people/:id', async (req,res) => {
    try {
        res.json(
          await People.findByIdAndUpdate(req.params.id, req.body, { new: true })
        )
      } catch (error) {
        res.status(400).json(error)
      }
})


module.exports = peopleRouter