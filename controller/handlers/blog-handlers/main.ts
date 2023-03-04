import { Request, Response } from "express";

const getAllBlogs = function(req: Request, res: Response) {
    res.send([
        {
            id: 1,
            title: "Helloworld"
        }
    ])
}

const CreateNewBlog =  function (req: Request, res: Response) {
    
}

export {
    getAllBlogs,
    CreateNewBlog
}