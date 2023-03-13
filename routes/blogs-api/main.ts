import express, { Router } from 'express'
import { CreateNewBlog, getAllBlogs } from '../../controller/handlers/blog-handlers/main'


const BlogApi = Router()
BlogApi.use(express.json())

BlogApi.get("/", getAllBlogs)

BlogApi.post("/", CreateNewBlog)

export {
    BlogApi
}