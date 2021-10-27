// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Notification = {
    code: number
    message: string
}

type PossuiAcesso = {
    possuiAcesso: boolean
}

type Response200 = {
    data: PossuiAcesso
    notifications?: Notification[]
}

type ResponseError = {
    type: string
    title: string
}


export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Response200 | ResponseError>
) {
    const { cpfCnpj } = req.query

    if(cpfCnpj === "73610725001") {
        const possuiAcesso: PossuiAcesso = {
            possuiAcesso: true
        }

        res.status(200).json({ data: possuiAcesso })
    }
    else if(cpfCnpj === "23536251934") {
        const possuiAcesso: PossuiAcesso = {
            possuiAcesso: false
        }

        res.status(200).json({ data: possuiAcesso })
    }
    else if(cpfCnpj === "23536251933") {
        const error: ResponseError = {
            title: "Usuário não cadastrado",
            type: "Error"
        }

        res.status(400).json(error)
    }
    else {
        const error: ResponseError = {
            title: "Erro generico",
            type: "Error"
        }

        res.status(500).json(error)
    }

}
