import { Request, Response } from 'express';
import { Blog } from '../../../models/blog';

import sql from '../../connection/mysql';

const getAllBlogs = function (req: Request, res: Response) {
  res.send([
    {
      id: 1,
      title: 'Helloworld',
    },
  ]);
};

const CreateNewBlog = (req: Request, res: Response) => {
  const blogModel: Blog = {};
  blogModel.title = 'hello';
  blogModel.description = 'this is a new blog';

  const query = `INSERT INTO finance.blogs (title, short_description,description ) VALUES (${blogModel.title}, ${blogModel.short_description}, ${blogModel.description}})`;

  sql.query(query, (error, result) => {
    if (error) throw error
    return {
        success: true,
        response: result
    }
  })
};

export { getAllBlogs, CreateNewBlog };
