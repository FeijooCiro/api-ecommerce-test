import { Request, Response } from "express"

import getConnection from '../db/connection'

const getAll = async (_req:Request, res:Response) => {
    try{
        const connection = await getConnection()
        const response = await connection.query('SELECT * FROM categories')

        return res.json(response[0])
    }
    catch(err: any) {
        return res.sendStatus(400).json({messege: 'Error de consulta ', err})
    }
}

const create = async (req:Request, res:Response) => {
    try{ 
        const connection = await getConnection()
        await connection.query('INSERT INTO categories SET ?', [req.body])

        return res.json({message: 'Se añadió una nueva categoría'})
    }
    catch(err: any){
        return res.sendStatus(400).json({message: 'Error de consulta ', err})
    }
}

export default { getAll, create }