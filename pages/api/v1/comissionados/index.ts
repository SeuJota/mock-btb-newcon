// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Comissionado = {
    idComissionado: number
    codigoComissionado: string
    nomeComissionado: string
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
    data: Comissionado[]
    notifications?: Notification[]
}

type IdComissionado = {
    idComissionado: number
}

type ResponsePost = {
    data: IdComissionado
    notifications?: Notification[]
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseGet | ResponsePost>
) {

    if (req.method === 'GET') {
        const com1: Comissionado = {
            idComissionado: 1,
            codigoComissionado: "ABC",
            nomeComissionado: "Pedro da comissão"
        };

        const com2: Comissionado = {
            idComissionado: 2,
            codigoComissionado: "DEF",
            nomeComissionado: "Carreta furacão"
        };

        const response: ResponseGet = {
            total: 2,
            totalPages: 1,
            page: 1,
            itemsPerPage: 10,
            data: [
                com1,
                com2
            ]
        }

        res.status(200).json(response)
    }

    if (req.method === 'POST') {
        res.status(200).json({
            data: {
                idComissionado: 1
            }
        })
    }

}
