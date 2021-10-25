// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import faker from 'faker'

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
    idPais: number
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
    idPais: number
    nomePais: string
    ddi: string
    naturalidade: string
}

type PaisResidenciaFiscal = {
    idPais: number
    nomePais: string
    ddi: string
    naturalidade: string
}

type PaisTelefoneExterior = {
    idPais: number
    nomePais: string
    ddi: string
    naturalidade: string
}

type PaisObrigacaoFiscal1 = {
    idPais: number
    nomePais: string
    ddi: string
    naturalidade: string
}

type PaisObrigacaoFiscal2 = {
    idPais: number
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
    idPais: number
    nomePais: string
    ddi: string
    naturalidade: string
}

type Data200 = {
    cpf: string
    dataNascimento: Date
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
    dataCasamento: Date
    idPessoaConjuge: number
    paisNascimento: PaisNascimento,
    paisResidenciaFiscal: PaisResidenciaFiscal
    possuiPaisResidenciaDiferente: boolean
    possuiTelefoneExterior: boolean
    dddTelefoneExterior: string
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
    dataExpedicao: Date
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
    const { cpf } = req.query

    const nivelEnsivo: NivelEnsino = {
        idNivelEnsino: faker.datatype.number({
            'min': 10,
            'max': 50
        }),
        codigoNivelEnsino: faker.datatype.number({
            'min': 10,
            'max': 50
        }).toString(),
        nomeNivelEnsino: faker.name.jobArea()
    }

    const profissao: Profissao = {
        idProfissao: faker.datatype.number({
            'min': 10,
            'max': 50
        }),
        codigoProfissao: faker.datatype.number({
            'min': 10,
            'max': 50
        }).toString(),
        nomeProfissao: faker.name.jobTitle()
    }

    const ufNaturalidade: UfNaturalidade = {
        idUf: faker.datatype.number({
            'min': 10,
            'max': 50
        }).toString(),
        nomeEstado: faker.address.state()
    }

    const paisNacionalidade: PaisNacionalidade = {
        idPais: faker.datatype.number({
            'min': 10,
            'max': 50
        }),
        nomePais: faker.address.country(),
        ddi: faker.datatype.number({
            'min': 10,
            'max': 50
        }).toString(),
        naturalidade: faker.address.county()
    }

    const estadoCivil: EstadoCivil = {
        idEstadoCivil: faker.datatype.number({
            'min': 10,
            'max': 50
        }),
        codigoEstadoCivil: faker.datatype.number({
            'min': 10,
            'max': 50
        }).toString(),
        nomeEstadoCivil: faker.name.jobArea(),
        permiteConjuge: faker.datatype.boolean(),
        exigeConjuge: faker.datatype.boolean()
    }

    const acessibilidade: Acessibilidade = {
        idAcessibilidade: faker.datatype.number({
            'min': 10,
            'max': 50
        }),
        codigoAcessibilidade: faker.datatype.number({
            'min': 10,
            'max': 50
        }).toString(),
        nomeAcessibilidade: faker.name.jobArea(),
    }

    const regimeCasamento: RegimeCasamento = {
        idRegimeCasamento: faker.datatype.number({
            'min': 10,
            'max': 50
        }),
        codigoRegimeCasamento: faker.datatype.number({
            'min': 10,
            'max': 50
        }).toString(),
        nomeRegimeCasamento: faker.name.jobArea()
    }

    const paisNascimento: PaisNascimento = {
        idPais: faker.datatype.number({
            'min': 10,
            'max': 50
        }),
        nomePais: faker.address.country(),
        ddi: faker.datatype.number({
            'min': 10,
            'max': 50
        }).toString(),
        naturalidade: faker.address.county()
    }

    const paisResidenciaFiscal: PaisResidenciaFiscal = {
        idPais: faker.datatype.number({
            'min': 10,
            'max': 50
        }),
        nomePais: faker.address.country(),
        ddi: faker.datatype.number({
            'min': 10,
            'max': 50
        }).toString(),
        naturalidade: faker.address.county()
    }

    const paisTelefoneExterior: PaisTelefoneExterior = {
        idPais: faker.datatype.number({
            'min': 10,
            'max': 50
        }),
        nomePais: faker.address.country(),
        ddi: faker.datatype.number({
            'min': 10,
            'max': 50
        }).toString(),
        naturalidade: faker.address.county()
    }

    const paisObrigacaoFiscal1: PaisObrigacaoFiscal1 = {
        idPais: faker.datatype.number({
            'min': 10,
            'max': 50
        }),
        nomePais: faker.address.country(),
        ddi: faker.datatype.number({
            'min': 10,
            'max': 50
        }).toString(),
        naturalidade: faker.address.county()
    }

    const paisObrigacaoFiscal2: PaisObrigacaoFiscal2 = {
        idPais: faker.datatype.number({
            'min': 10,
            'max': 50
        }),
        nomePais: faker.address.country(),
        ddi: faker.datatype.number({
            'min': 10,
            'max': 50
        }).toString(),
        naturalidade: faker.address.county()
    }

    const tipoDocumento: TipoDocumento = {
        idTipoDocumento: faker.datatype.number({
            'min': 10,
            'max': 50
        }),
        codigoTipoDocumento: faker.datatype.number({
            'min': 10,
            'max': 50
        }).toString(),
        nomeTipoDocumento: faker.address.zipCode(),
        tipoPessoa: "PJ"
    }

    const paisObrigacaoFiscal3: PaisObrigacaoFiscal3 = {
        idPais: faker.datatype.number({
            'min': 10,
            'max': 50
        }),
        nomePais: faker.address.country(),
        ddi: faker.datatype.number({
            'min': 10,
            'max': 50
        }).toString(),
        naturalidade: faker.address.county()
    }

    const data200: Data200 = {
        cpf: cpf.toString(),
        dataNascimento: faker.datatype.datetime(),
        sexo: "M",
        nivelEnsino: nivelEnsivo,
        profissao: profissao,
        renda: 0,
        ufNaturalidade: ufNaturalidade,
        naturalidade: faker.address.cityName(),
        paisNacionalidade: paisNacionalidade,
        nomePai: faker.name.firstName(0),
        nomeMae: faker.name.firstName(2),
        estadoCivil: estadoCivil,
        acessibilidade: acessibilidade,
        politicamenteExposto: faker.datatype.boolean(),
        regimeCasamento: regimeCasamento,
        dataCasamento: faker.datatype.datetime(),
        idPessoaConjuge: faker.datatype.number({
            'min': 10,
            'max': 50
        }),
        paisNascimento: paisNascimento,
        paisResidenciaFiscal: paisResidenciaFiscal,
        possuiPaisResidenciaDiferente: faker.datatype.boolean(),
        possuiTelefoneExterior: faker.datatype.boolean(),
        dddTelefoneExterior: faker.datatype.number({
            'min': 10,
            'max': 50
        }).toString(),
        numeroTelefoneExterior: faker.phone.phoneNumber(),
        paisTelefoneExterior: paisTelefoneExterior,
        paisObrigacaoFiscal1: paisObrigacaoFiscal1,
        paisObrigacaoFiscal2: paisObrigacaoFiscal2,
        paisObrigacaoFiscal3: paisObrigacaoFiscal3,
        nifPaisObrigacaoFiscal1: faker.datatype.string(1),
        nifPaisObrigacaoFiscal2: faker.datatype.string(1),
        nifPaisObrigacaoFiscal3: faker.datatype.string(1),
        boasCondicoesSaude: faker.datatype.boolean(),
        emancipado: faker.datatype.boolean(),
        idPessoa: faker.datatype.number({
            'min': 10,
            'max': 50
        }),
        nomePessoa: faker.name.firstName(1),
        tipoDocumento: tipoDocumento,
        documento: faker.address.zipCode(),
        orgaoEmissor: faker.datatype.string(3).toUpperCase(),
        dataExpedicao: faker.datatype.datetime(),
    }

    const response200: Response200 = {
        data: data200
    }

    res.status(200).json(response200)
}
