// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type IdComissionado = {
    idComissionado: number
}

type ResponsePut = {
    data: IdComissionado
    notifications?: Notification[]
}

type TipoEndereco = {
    idTipoEndereco: number
    codigoTipoEndereco: string
    nomeTipoEndereco: string
}

type Endereco = {
    idEndereco: number,
    tipoEndereco: TipoEndereco
    cep: string
    logradouro: string
    numero: string
    complemento: string
    bairro: string
    cidade: Cidade,
    estado: Estado
    referencia: string
    caixaPostal: string
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

type Matricula = {
    matricula: string
    dataInclusao: string
}

type ResponseGet = {
    idComissionado: number
    codigoComissionado: string
    nomeComissionado: string
    endereco: Endereco
    matriculas: Matricula[],
    notifications?: Notification[]
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseGet | ResponsePut>
) {

    const { idComissionado } = req.query
    if(req.method === 'GET') {
        res.status(200).json(
            {
                idComissionado: Number(idComissionado),
                codigoComissionado: "123",
                nomeComissionado: "José da Silva",
                endereco: {
                    idEndereco: 1,
                    tipoEndereco: {
                        idTipoEndereco: 2,
                        codigoTipoEndereco: "123",
                        nomeTipoEndereco: "Tipo de endereço 1"
                    },
                    cep: "04795-100",
                    logradouro: "Av. Jornalista Roberto Marinho",
                    numero: "85",
                    complemento: "",
                    bairro: "Cidade Monções",
                    cidade: {
                        idCidade: 1,
                        nomeCidade: "São Paulo",
                        ddd: "11"
                    },
                    estado: {
                        idUf: "1",
                        nomeEstado: "SP"
                    },
                    referencia: "",
                    caixaPostal: "123"
                },
                matriculas: [
                    {
                        matricula: "123",
                        dataInclusao: "2021-10-08T16:21:31.036Z"
                    }
                ]
            }
        );
    }

    if (req.method === 'PUT') {
        res.status(200).json({
            data: {
                idComissionado: Number(idComissionado)
            }
        })
    }
}
