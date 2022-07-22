const express = require('express');
const router = express.Router(); 

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


// Get
router.get('/', async (req, res, next) => {
  try {
    const users = await prisma.user.findMany({
      
    })
    res.json(users)
  } catch (error) {
    next(error)
  }
  });


// Get by ID
router.get('/:id', async (req, res, next) => {
  try {
    const {id} = req.params
    const users = await prisma.user.findUnique({
      where: {
        id: Number(id),
      },
    })
    res.json(users)
  } catch (error) {
    next(error)
  }
});

router.post('/', async (req, res, next) => {
  try {
    const {name, email, password, } = req.body
    const users = await prisma.user.create({
      data: {
        name, email, password
      }
    })
    res.json(users)
  } catch (error) {
    next(error)
  }
  });


//Patch
router.patch('/:id', async (req, res, next) => {
  try {
    const {id} = req.params
    const {name, email, password, } = req.body
    const users = await prisma.user.update({
      where: {
        id: Number(id),
      },
      data: {
        name, email, password
      }
    })
    res.json(users)
  } catch (error) {
    next(error)
  }
});

// Delete
router.delete('/:id', async (req, res, next) => {
  try {
    const {id} = req.params
    const users = await prisma.user.delete({
      where: {
        id: Number(id),
      },
    })
    res.json(users)
  } catch (error) {
    next(error)
  }
});

module.exports = router;