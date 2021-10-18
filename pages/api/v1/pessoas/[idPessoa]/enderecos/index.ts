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

type TipoEndereco = {
    idTipoEndereco: number
    codigoTipoEndereco: string
    nomeTipoEndereco: string
}

type Cidade = {
    idCidade: number
    nomeCidade: string
    ddd: string
}

type Estado = {
    idUf: string
    nomeEstado: string
}

type DataGet200 = {
    idEndereco: number
    tipoEndereco: TipoEndereco
    cep: string
    logradouro: string
    numero: string
    complemento: string
    bairro: string
    cidade: Cidade
    estado: Estado
    referencia: string
    caixaPostal: string
}

type ResponseGet200 = {
    data: DataPost200
    notifications?: Notification[]
}

type DataPost200 = {
    idEndereco: number
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

            const tipoEndereco: TipoEndereco = {
                idTipoEndereco: 1,
                codigoTipoEndereco: "1",
                nomeTipoEndereco: "abc"
            }

            const dataGet200_1: DataGet200 = {
                idEndereco: 1,
                tipoEndereco: tipoEndereco,
                cep: "00000-000",
                logradouro: "Rua ABC",
                numero: 123,
                complemento: "",
                bairro: "Bairro A",
                cidade: "Cidade B",
                estado: "SP",
                referencia: "",
                caixaPostal: ""
            }

            const dataGet200_2: DataGet200 = {
                idEndereco: 2,
                tipoEndereco: tipoEndereco,
                cep: "00000-000",
                logradouro: "Rua ABC",
                numero: 123,
                complemento: "",
                bairro: "Bairro A",
                cidade: "Cidade B",
                estado: "SP",
                referencia: "",
                caixaPostal: ""
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
                idEndereco: 1
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
}
