import express, { Router } from 'express'
import { getAllBlogs } from '../../controller/handlers/blog-handlers/main'


const BlogApi = Router()
BlogApi.use(express.json())

BlogApi.get("/", getAllBlogs)

export {
    BlogApi
}