import express, { Router } from 'express'


const CoffeeApi = Router()
CoffeeApi.use(express.json())


export {
    CoffeeApi
}