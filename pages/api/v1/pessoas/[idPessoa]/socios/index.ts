// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Notification = {
    code: number
    message: string
}

type DataGet = {
    idSocio: number
    tipoPessoa: string
    cpfCnpj: string
    nomeSocio: string
    percentualParticipacao: number
    dataNascimentoFundacao: string
}

type ResponseGet = {
    data: DataGet
    notifications?: Notification[]
}

type DataPost = {
    idSocio: number
}

type ResponsePost = {
    data: DataPost
    notifications?: Notification[]
}

type ResponseError = {
    type: string
    title: string
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseGet | ResponseError>
) {
    const {idPessoa} = req.query

    if (req.method === 'GET') {

        if (idPessoa === "1") {

            const dataGet_1: DataGet = {
                idSocio: 1,
                tipoPessoa: "123",
                cpfCnpj: "000.000.000-88",
                nomeSocio: "Fulano da Silva",
                percentualParticipacao: 50,
                dataNascimentoFundacao: "2021-10-18T16:19:09.058Z"
            }

            const dataGet_2: DataGet = {
                idSocio: 2,
                tipoPessoa: "123",
                cpfCnpj: "000.000.000-88",
                nomeSocio: "Ciclano da Silva",
                percentualParticipacao: 50,
                dataNascimentoFundacao: "2021-10-18T16:19:09.058Z"
            }

            const responseGet: ResponseGet = {
                data: [dataGet_1, dataGet_2]
            }

            res.status(200).json(responseGet)
        } else {
            const error: ResponseError = {
                title: "Erro generico",
                type: "Error"
            }

            res.status(500).json(error)
        }
    }

    if(req.method === 'POST') {

        if(idPessoa === "1") {

            const dataPost: DataPost = {
                idSocio: 1
            }

            const responsePost: ResponsePost = {
                data: dataPost
            }

            res.status(200).json(responsePost)
        } else {
            const error: ResponseError = {
                title: "Erro generico",
                type: "Error"
            }

            res.status(500).json(error)
        }

    }



}
