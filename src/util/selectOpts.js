import React from 'react';

export const Estados = [
    'Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal',
    'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul',
    'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro',
    'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina',
    'São Paulo', 'Sergipe', 'Tocantins'
];


export const CnaeOpt = [
    '5211702. Guarda-móveis', 
    '6311900. Tratamento de dados, provedores de serviços de aplicação e serviços de hospedagem na internet', 
    '7020400. Atividades de consultoria em gestão empresarial, exceto consultoria técnica específica',
    '7420005. Serviços de microfilmagem', 
    '8211300. Serviços combinados de escritório e apoio administrativo', 
    '8219999. Preparação de documentos e serviços especializados de apoio administrativo não especificados anteriormente'
]; // DÚVIDA

export const RecolhimentoOpt = [
    'A recolher pelo Prestador', 'Retido na fonte pelo Tomador'
];

export const LocalServOpt = [
    'Sorocaba', 'Votorantim'
]; // OPÇÕES DE LOCAL VARIA DEPENDENDO DO CLIENTE;;;; *** DADOS ATUAIS APENAS PARA VISUALIZAÇÃO

export const TributacaoOpt = [
    'Isenta de ISS', 'Não incidência no município', 'Imune', 
    'Exigibilidade Susp.Dec.J/Proc.A', 'Não tributável', 'Tributável',
    'Tributável Fixo', 'Tributável S.N.', 'Micro Empreendedor Individual (MEI)'
];

export const renderOpitions = (arr) => {
    const options = [];
    options.push(<option value="Selecione...">Selecione...</option>)
    for (let i = 0; i < arr.length; i++) {
        options.push(<option key={i} value={arr[i]}>{arr[i]}</option>);
    }
    return options;
}