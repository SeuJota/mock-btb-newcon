// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Notification = {
    code: number
    message: string
}

type RamoAtividade = {
    idRamoAtividade: number
    codigoRamoAtividade: string
    nomeRamoAtividade: string
}

type TipoDocumento = {
    idTipoDocumento: number
    codigoTipoDocumento: string
    nomeTipoDocumento: string
    tipoPessoa: string
}

type Data = {
    cnpj: string
    dataFundacao: string
    nomeFantasia: string
    ramoAtividade: RamoAtividade,
    valorFaturamento: number
    idPessoa: number
    nomePessoa: string
    tipoDocumento: TipoDocumento,
    documento: string
    orgaoEmissor: string
    dataExpedicao: string
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
    const { idPessoa } = req.query

    if(idPessoa === "1") {

        const ramoAtividade: RamoAtividade = {
            idRamoAtividade: 1,
            codigoRamoAtividade: "123",
            nomeRamoAtividade: "Teste"
        }

        const tipoDocumento: TipoDocumento = {
            idTipoDocumento: 1,
            codigoTipoDocumento: "123",
            nomeTipoDocumento: "Teste",
            tipoPessoa: "123"
        }

        const data: Data = {
            cnpj: "89299640000158",
            dataFundacao: "2021-10-18T16:01:40.585Z",
            nomeFantasia: "Empresa xpto",
            ramoAtividade: ramoAtividade,
            valorFaturamento: "100.00",
            idPessoa: 1,
            nomePessoa: "Empresa xpto",
            tipoDocumento: tipoDocumento,
            documento: "123456789",
            orgaoEmissor: "RFB",
            dataExpedicao: "2021-10-18T16:01:40.585Z"
        }

        const response: Response = {
            data: [data]
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
