import { createPool, Pool } from 'mysql2/promise'

const getConnection = async (): Promise<Pool> =>
    await createPool({
        host: 'localhost',
        user: 'root',
        database: 'ecommerce-test-database'
    })

export default getConnection