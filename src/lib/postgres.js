const {Pool} = require('pg')

const pool = new Pool({
    host: 'localhost',
    user: 'ahror',
    password: 111133,
    database: 'news',
    port: 5432
})

const postgres = (req, res, next) => {

    req.rows = async (SQL, ...params) => {

        const client = await pool.connect()

        try {

            const {rows} = await client.query(SQL, params)
            return rows

        } catch (error) {
           console.error(error); 
        }
        finally{
            client.release()
        }

    }
    next()

}

module.exports = postgres