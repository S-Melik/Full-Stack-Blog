const express = require('express');
const router = express.Router(); 


const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Get
router.get('/', async (req, res, next) => {
   try {
     const articles = await prisma.article.findMany({
       include: { category: true },
     })
     res.json(articles)
   } catch (error) {
     next(error)
   }
   });

// Get by ID
router.get('/:id', async (req, res, next) => {
  try {
    const {id} = req.params
    const articles = await prisma.article.findUnique({
      where: {
        id: Number(id),
      },
      include: { category: true },
    })
    res.json(articles)
  } catch (error) {
    next(error)
  }
});


//Post
router.post('/', async (req, res, next) => {
  try {
    const {title, content, authorId} = req.body
    const articles = await prisma.article.create({
      data: {
        title, content, authorId
      }
    })
    res.json(articles)
  } catch (error) {
    next(error)
  }
  });

//Patch
router.patch('/:id', async (req, res, next) => {
  try {
    const {id} = req.params
    const {title, content} = req.body
    const articles = await prisma.article.update({
      where: {
        id: Number(id),
      },
      data: {
        title, content
      }
    })
    res.json(articles)
  } catch (error) {
    next(error)
  }
});

// Delete
router.delete('/:id', async (req, res, next) => {
  try {
    const {id} = req.params
    const articles = await prisma.article.delete({
      where: {
        id: Number(id),
      },
    })
    res.json(articles)
  } catch (error) {
    next(error)
  }
});

module.exports = router;