// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Notification = {
    code: number
    message: string
}

type Data = {
    idPessoa: number
}

type Response = {
    data: Data
    notifications?: Notification[]
}

type ResponseError = {
    type: string
    title: string
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Response | ResponseError>
) {
    const { cpf } = req.body

    if(cpf === "23536251935") {

        const data: Data = {
            idPessoa: 1
        }

        const response: Response = {
            data: data
        }

        res.status(200).json(response)
    }
    else {
        const error: ResponseError = {
            title: "Erro generico",
            type: "Error"
        }

        res.status(500).json(error)
    }

}
