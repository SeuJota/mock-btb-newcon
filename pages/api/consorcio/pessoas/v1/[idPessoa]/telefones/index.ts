// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Notification = {
    code: number
    message: string
}

type TipoTelefone = {
    idTipoTelefone: number
    codigoTipoTelefone: string
    nomeTipoTelefone: string
}

type Cidade = {
    idCidade: number
    nomeCidade: string
    ddd: number
}

type Estado = {
    idUf: number
    nomeEstado: string
}

type DataGet = {
    idTelefone: number
    tipoTelefone: TipoTelefone
    cidade: Cidade
    estado: Estado
    numero: string
    ramal: string
}

type ResponseGet = {
    data: DataGet[]
    notifications?: Notification[]
}

type DataPost = {
    idTelefone: number
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
    res: NextApiResponse<ResponseGet | ResponseError | ResponsePost>
) {

    if (req.method === 'GET') {
        const tipoTelefone: TipoTelefone = {
            idTipoTelefone: 1,
            codigoTipoTelefone: "123",
            nomeTipoTelefone: "Casa"
        }

        const cidade: Cidade = {
            idCidade: 1,
            nomeCidade: "Duque de Caxias",
            ddd: 21
        }

        const estado: Estado = {
            idUf: 2,
            nomeEstado: "RJ"
        }

        const dataGet_1: DataGet = {
            idTelefone: 1,
            tipoTelefone: tipoTelefone,
            cidade: cidade,
            estado: estado,
            numero: "123",
            ramal: "456"
        }

        const dataGet_2: DataGet = {
            idTelefone: 2,
            tipoTelefone: tipoTelefone,
            cidade: cidade,
            estado: estado,
            numero: "456",
            ramal: "456"
        }


        const responseGet: ResponseGet = {
            data: [dataGet_1, dataGet_2]
        }

        res.status(200).json(responseGet)
    }

    if(req.method === 'POST') {
        const dataPost: DataPost = {
            idTelefone: 1
        }

        const responsePost: ResponsePost = {
            data: dataPost
        }

        res.status(200).json(responsePost)
    }
}
