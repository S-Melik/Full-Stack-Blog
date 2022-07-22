const express = require('express');
const router = express.Router(); 

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Get
router.get('/', async (req, res, next) => {
  try {
    const categories = await prisma.category.findMany({
      
    })
    res.json(categories)
  } catch (error) {
    next(error)
  }
});

// Get by ID
router.get('/:id', async (req, res, next) => {
  try {
    const {id} = req.params
    const categories = await prisma.category.findUnique({
      where: {
        id: Number(id),
      },
    })
    res.json(categories)
  } catch (error) {
    next(error)
  }
});

//Post
router.post('/', async (req, res, next) => {
  try {
    const {cate} = req.body
    const categories = await prisma.category.create({
      data: {
        cate
      }
    })
    res.json(categories)
  } catch (error) {
    next(error)
  }
  });

//Patch
router.patch('/:id', async (req, res, next) => {
  try {
    const {id} = req.params
    const {cate} = req.body
    const categories = await prisma.category.update({
      where: {
        id: Number(id),
      },
      data: {
        cate
      }
    })
    res.json(categories)
  } catch (error) {
    next(error)
  }
});

// Delete
router.delete('/:id', async (req, res, next) => {
  try {
    const {id} = req.params
    const categories = await prisma.category.delete({
      where: {
        id: Number(id),
      },
    })
    res.json(categories)
  } catch (error) {
    next(error)
  }
});

module.exports = router;