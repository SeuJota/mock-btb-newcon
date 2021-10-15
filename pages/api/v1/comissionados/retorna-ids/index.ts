import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseGet = {
    total: number
    totalPages: number
    page: number
    itemsPerPage: number
    data: getIds[]
    notifications?: Notification[]
}

type getIds = {
    idPessoa: number,
    idContaBancaria: number,
    idEndereco: number,
    idEmail: number,
    idTelefone: number,
    idCategoriaComissionado: number,
    idPontoVenda: number
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseGet>
) {
    if(req.method === 'GET') {
        const id1: getIds = {
            idPessoa: 1,
            idContaBancaria: 1,
            idEndereco: 1,
            idEmail: 1,
            idTelefone: 1,
            idCategoriaComissionado: 1,
            idPontoVenda: 1
        };

        const id2: getIds = {
            idPessoa: 1,
            idContaBancaria: 1,
            idEndereco: 1,
            idEmail: 1,
            idTelefone: 1,
            idCategoriaComissionado: 1,
            idPontoVenda: 1
        };

        const response: ResponseGet = {
            total: 2,
            totalPages: 1,
            page: 1,
            itemsPerPage: 10,
            data: [
                id1,
                id2
            ]
        }
        res.status(200).json(response)
    }
}