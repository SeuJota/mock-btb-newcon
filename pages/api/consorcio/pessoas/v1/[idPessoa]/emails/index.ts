// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Notification = {
    code: number
    message: string
}

type ResponseError = {
    type: string
    title: string
}

type DataGet200 = {
    idEmail: number
    email: string
}

type ResponseGet200 = {
    data: DataGet200
    notifications?: Notification[]
}

type DataPost200 = {
    idEmail: number
}

type ResponsePost200 = {
    data: DataPost200
    notifications?: Notification[]
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseGet200 | ResponseError>
) {
    const { idPessoa } = req.query

    if (req.method === 'GET') {

        if (idPessoa === "1") {
            const dataGet200_1: DataGet200 = {
                idEmail: 1,
                email: "fulado@dasilva.com"
            }

            const dataGet200_2: DataGet200 = {
                idEmail: 2,
                email: "ciclano@dasilva.com"
            }

            const responseGet200: ResponseGet200 = {
                data: [dataGet200_1, dataGet200_2]
            }

            res.status(200).json(responseGet200);
        } else {
            const error: ResponseError = {
                title: "Erro generico",
                type: "Error"
            }

            res.status(400).json(error)
        }
    }

    if (req.method === 'POST') {

        if (idPessoa === "1") {

            const dataPost200: DataPost200 = {
                idEmail: 1
            }

            const responsePost200: ResponsePost200 = {
                data: dataPost200
            }
            res.status(200).json(responsePost200);

        } else {
            const error: ResponseError = {
                title: "Erro generico",
                type: "Error"
            }

            res.status(400).json(error)
        }

    }

    // if(cpfCnpj === "23536251935") {
    //     const possuiAcesso: PossuiAcesso = {
    //         possuiAcesso: true
    //     }
    //
    //     res.status(200).json({ data: possuiAcesso })
    // }
    // else if(cpfCnpj === "23536251934") {
    //     const possuiAcesso: PossuiAcesso = {
    //         possuiAcesso: false
    //     }
    //
    //     res.status(200).json({ data: possuiAcesso })
    // }
    // else if(cpfCnpj === "23536251933") {
    //     const error: ResponseError = {
    //         title: "Usuário não cadastrado",
    //         type: "Error"
    //     }
    //
    //     res.status(400).json(error)
    // }
    // else {
    //     const error: ResponseError = {
    //         title: "Erro generico",
    //         type: "Error"
    //     }

        // res.status(500).json(error)
    // }

}
