const express = require('express');
const router = express.Router(); 


const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Get
router.get('/', async (req, res, next) => {
  try {
    const comments = await prisma.comment.findMany({
      
    })
    res.json(comments)
  } catch (error) {
    next(error)
  }
  });



// Get by ID
router.get('/:id', async (req, res, next) => {
  try {
    const {id} = req.params
    const comments = await prisma.comment.findUnique({
      where: {
        id: Number(id),
      },
    
    })
    res.json(comments)
  } catch (error) {
    next(error)
  }
});


//Post
router.post('/', async (req, res, next) => {
  try {
    const {commn, articleId} = req.body
    const comments = await prisma.comment.create({
      data: {
        commn, articleId
      }
    })
    res.json(comments)
  } catch (error) {
    next(error)
  }
  });


//Patch
router.patch('/:id', async (req, res, next) => {
  try {
    const {id} = req.params
    const {commn} = req.body
    const comments = await prisma.comment.update({
      where: {
        id: Number(id),
      },
      data: {
        commn
      }
    })
    res.json(comments)
  } catch (error) {
    next(error)
  }
});

// Delete
router.delete('/:id', async (req, res, next) => {
  try {
    const {id} = req.params
    const comments = await prisma.comment.delete({
      where: {
        id: Number(id),
      },
    })
    res.json(comments)
  } catch (error) {
    next(error)
  }
});

module.exports = router;