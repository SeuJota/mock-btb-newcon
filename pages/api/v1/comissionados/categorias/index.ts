import type { NextApiRequest, NextApiResponse } from 'next'

type Categoria = {
    idCategoriaComissionado: number
    codigoCategoriaComissionado: string
    nomeCategoriaComissionado: string
}

type Notification = {
    code: number
    message: string
}

type ResponseGet = {
    total: number
    totalPages: number
    page: number
    itemsPerPage: number
    data: Categoria[]
    notifications?: Notification[]
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseGet>
) {
    if(req.method === 'GET') {
        const cat1: Categoria = {
            idCategoriaComissionado: 1,
            codigoCategoriaComissionado: "ABC",
            nomeCategoriaComissionado: "Cat 1"
        };

        const cat2: Categoria = {
            idCategoriaComissionado: 2,
            codigoCategoriaComissionado: "DEF",
            nomeCategoriaComissionado: "Cat 2"
        };

        const response: ResponseGet = {
            total: 2,
            totalPages: 1,
            page: 1,
            itemsPerPage: 10,
            data: [
                cat1,
                cat2
            ]
        }

        res.status(200).json(response)

    }

}