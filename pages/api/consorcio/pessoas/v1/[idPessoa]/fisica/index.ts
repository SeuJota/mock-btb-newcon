// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Notification = {
    code: number
    message: string
}

type NivelEnsino = {
    idNivelEnsino: number
    codigoNivelEnsino: string
    nomeNivelEnsino: string
}

type Profissao = {
    idProfissao: number
    codigoProfissao: string
    nomeProfissao: string
}

type UfNaturalidade = {
    idUf: string
    nomeEstado: string
}

type PaisNacionalidade = {
    idPais: string
    nomePais: string
    ddi: string
    naturalidade: string
}

type EstadoCivil = {
    idEstadoCivil: number
    codigoEstadoCivil: string
    nomeEstadoCivil: string
    permiteConjuge: boolean
    exigeConjuge: boolean
}

type Acessibilidade = {
    idAcessibilidade: number
    codigoAcessibilidade: string
    nomeAcessibilidade: string
}

type RegimeCasamento = {
    idRegimeCasamento: number
    codigoRegimeCasamento: string
    nomeRegimeCasamento: string
}

type PaisNascimento = {
    idPais: string
    nomePais: string
    ddi: string
    naturalidade: string
}

type PaisResidenciaFiscal = {
    idPais: string
    nomePais: string
    ddi: string
    naturalidade: string
}

type PaisTelefoneExterior = {
    idPais: string
    nomePais: string
    ddi: string
    naturalidade: string
}

type PaisObrigacaoFiscal1 = {
    idPais: string
    nomePais: string
    ddi: string
    naturalidade: string
}

type PaisObrigacaoFiscal2 = {
    idPais: string
    nomePais: string
    ddi: string
    naturalidade: string
}

type TipoDocumento = {
    idTipoDocumento: number
    codigoTipoDocumento: string
    nomeTipoDocumento: string
    tipoPessoa: string
}

type PaisObrigacaoFiscal3 = {
    idPais: string
    nomePais: string
    ddi: string
    naturalidade: string
}

type Data200 = {
    cpf: string
    dataNascimento: string
    sexo: string
    nivelEnsino: NivelEnsino
    profissao: Profissao
    renda: number
    ufNaturalidade: UfNaturalidade
    naturalidade: string
    paisNacionalidade: PaisNacionalidade
    nomePai: string
    nomeMae: string
    estadoCivil: EstadoCivil
    acessibilidade: Acessibilidade
    politicamenteExposto: boolean
    regimeCasamento: RegimeCasamento
    dataCasamento: string
    idPessoaConjuge: number
    paisNascimento: PaisNascimento,
    paisResidenciaFiscal: PaisResidenciaFiscal
    possuiPaisResidenciaDiferente: boolean
    possuiTelefoneExterior: boolean
    dddTelefoneExterior: boolean
    numeroTelefoneExterior: string
    paisTelefoneExterior: PaisTelefoneExterior
    paisObrigacaoFiscal1: PaisObrigacaoFiscal1
    paisObrigacaoFiscal2: PaisObrigacaoFiscal2
    paisObrigacaoFiscal3: PaisObrigacaoFiscal3
    nifPaisObrigacaoFiscal1: string
    nifPaisObrigacaoFiscal2: string
    nifPaisObrigacaoFiscal3: string
    boasCondicoesSaude: boolean
    emancipado: boolean
    idPessoa: number
    nomePessoa: string
    tipoDocumento: TipoDocumento
    documento: string
    orgaoEmissor: string
    dataExpedicao: string
}

type Response200 = {
    data: Data200
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
    const { idPessoa } = req.query

    if(idPessoa === "1") {

        const nivelEnsivo: NivelEnsino = {
            idNivelEnsino: 1,
            codigoNivelEnsino: "1",
            nomeNivelEnsino: "1"
        }

        const profissao: Profissao = {
            idProfissao: 1,
            codigoProfissao: "1",
            nomeProfissao: ""
        }

        const ufNaturalidade: UfNaturalidade = {
            idUf: "1",
            nomeEstado: "1"
        }

        const paisNacionalidade: PaisNacionalidade = {
            idPais: "1",
            nomePais: "1",
            ddi: "1",
            naturalidade: "1"
        }

        const estadoCivil: EstadoCivil = {
            idEstadoCivil: 1,
            codigoEstadoCivil: "1",
            nomeEstadoCivil: "1",
            permiteConjuge: true,
            exigeConjuge: true
        }

        const acessibilidade: Acessibilidade = {
            idAcessibilidade: 1,
            codigoAcessibilidade: "1",
            nomeAcessibilidade: "1"
        }

        const regimeCasamento: RegimeCasamento = {
            idRegimeCasamento: 1,
            codigoRegimeCasamento: "1",
            nomeRegimeCasamento: "1"
        }

        const paisNascimento: PaisNascimento = {
            idPais: "1",
            nomePais: "1",
            ddi: "1",
            naturalidade: "1"
        }

        const paisResidenciaFiscal: PaisResidenciaFiscal = {
            idPais: "1",
            nomePais: "1",
            ddi: "1",
            naturalidade: "1"
        }

        const paisTelefoneExterior: PaisTelefoneExterior = {
            idPais: "1",
            nomePais: "1",
            ddi: "1",
            naturalidade: "1"
        }

        const paisObrigacaoFiscal1: PaisObrigacaoFiscal1 = {
            idPais: "1",
            nomePais: "1",
            ddi: "1",
            naturalidade: "1"
        }

        const paisObrigacaoFiscal2: PaisObrigacaoFiscal2 = {
            idPais: "1",
            nomePais: "1",
            ddi: "1",
            naturalidade: "1"
        }

        const tipoDocumento: TipoDocumento = {
            idTipoDocumento: 1,
            codigoTipoDocumento: "1",
            nomeTipoDocumento: "1",
            tipoPessoa: "1"
        }

        const paisObrigacaoFiscal3: PaisObrigacaoFiscal3 = {
            idPais: "1",
            nomePais: "1",
            ddi: "1",
            naturalidade: "1"
        }

        const data200: Data200 = {
            cpf: "123.456.789-00",
            dataNascimento: "2021-10-18T14:02:51.613Z",
            sexo: "M",
            nivelEnsino: nivelEnsivo,
            profissao: profissao,
            renda: 0,
            ufNaturalidade: ufNaturalidade,
            naturalidade: "Osasco",
            paisNacionalidade: paisNacionalidade,
            nomePai: "José",
            nomeMae: "Maria",
            estadoCivil: estadoCivil,
            acessibilidade: acessibilidade,
            politicamenteExposto: false,
            regimeCasamento: regimeCasamento,
            dataCasamento: "2021-10-18T14:02:51.613Z",
            idPessoaConjuge: 0,
            paisNascimento: paisNascimento,
            paisResidenciaFiscal: paisResidenciaFiscal,
            possuiPaisResidenciaDiferente: true,
            possuiTelefoneExterior: true,
            dddTelefoneExterior: "123",
            numeroTelefoneExterior: "123456789",
            paisTelefoneExterior: paisTelefoneExterior,
            paisObrigacaoFiscal1: paisObrigacaoFiscal1,
            paisObrigacaoFiscal2: paisObrigacaoFiscal2,
            paisObrigacaoFiscal3: paisObrigacaoFiscal3,
            nifPaisObrigacaoFiscal1: "a",
            nifPaisObrigacaoFiscal2: "b",
            nifPaisObrigacaoFiscal3: "c",
            boasCondicoesSaude: true,
            emancipado: true,
            idPessoa: 0,
            nomePessoa: "Josealdo",
            tipoDocumento: tipoDocumento,
            documento: "123456",
            orgaoEmissor: "DIC",
            dataExpedicao: "2021-10-18T14:02:51.613Z"
        }

        const response200: Response200 = {
            data: data200
        }

        res.status(200).json(response200)
    }
    else {
        const error: ResponseError = {
            title: "Erro generico",
            type: "Error"
        }

        res.status(500).json(error)
    }

}
