import { Request, Response } from "express"

import getConnection from "../db/connection"

const getAll = async (_req:Request, res:Response) => {
    try{
        const connection = await getConnection()
        const response = await connection.query('SELECT * FROM products')

        return res.json(response[0])
    }
    catch(err: any) {
        return res.sendStatus(400).json({message: 'Error de consulta ', err})
    }
}

const create = async (req:Request, res:Response) => {
    try{
        const connection = await getConnection()
        await connection.query('INSERT INTO products SET ?', [req.body])

        return res.json({message: 'Se añadió un nuevo producto'})
    }
    catch(err: any) {
        return res.sendStatus(400).json({message: 'Error de consulta', err})
    }
}

export default { getAll, create }