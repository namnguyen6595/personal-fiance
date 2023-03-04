import {connectDb} from '../../controller/connection/mysql'

type BlogRequest = {
    UserId: string,
    Description: string,    
}

const tableName:string = 'blogs'
const mysql = connectDb()
class Blog {
    constructor() {

    }
    
    static CreateNewBlog (req: BlogRequest) {
        const sql = `INSERT INTO ${tableName} (user_id, description) VALUES (${req.UserId},${req.Description})`

        mysql.query
    }


}