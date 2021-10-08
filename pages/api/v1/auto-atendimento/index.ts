// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { v4 as uuidv4 } from 'uuid';

type Notification = {
    code: number
    message: string
}

type Guid = {
    guid: string
}

type Response200 = {
    data: Guid
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

    const { cpfCnpj } = req.body

    if(cpfCnpj === "23536251935") {
        const guid :Guid = {
            guid: uuidv4()
        }
        res.status(200).json({data: guid})
    } else{
        const error: ResponseError = {
            title: "Erro generico",
            type: "Error"
        }

        res.status(400).json(error)
    }


}
