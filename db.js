import { createPool } from "mysql2/promise";


const pool = createPool({
    host: 'localhost',
    database: 'usersdb',
    user:'root',
    password: 'redondos86'
})

export default pool