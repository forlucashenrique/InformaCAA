export type Location = {
    id: string;
    title: string;
    description: string;
    coordinates: [number, number]; // Longitude e Latitude
    link: string;
    image: string;
}

export const locations: Location[] = [
    {
        id: '1',
        title: 'Auditório Mestre Vitalino',
        coordinates: [-35.98184430303580, -8.225231577647060],
        description: 'Local de eventos e palestras da universidade, localizado no Bloco de Comunicação.',
        link: 'https://www.ufpe.br/caa/eventoscaa',
        image: 'auditorio-mestre-vitalino'
    },

    {
        id: '2',
        title: 'Auditório Luiz Gonzaga',
        coordinates: [-35.984862488867414, -8.224764234809543],
        description: 'Local de eventos e palestras da universidade, localizado próximo dos Blocos de Física e Economia. ',
        link: 'https://www.ufpe.br/caa/eventoscaa',
        image: 'auditorio-luiz-gonzaga'
    },

    {
        id: '3',
        title: 'Assistência Estudantil',
        coordinates: [-35.984065136523500, -8.22462830674169],
        description: 'Programas, auxílios e serviços da Assistência Estudantil.',
        link: 'https://www.ufpe.br/caa/coord-gestoras/cae',
        image: 'assistencia-estudantil'
    },

    {
        id: '4',
        title: 'Biblioteca do Agreste',
        coordinates: [-35.98351221925370, -8.224738504197040],
        description: 'Horário  de funcionamento: Segunda a sexta-feira, das 7h30 às 21h30, com horário de atendimento no balcão até às 21h15.',
        link: 'https://www.ufpe.br/caa/bibliotecas',
        image: 'biblioteca-do-agreste'
    },
    {   
        id: '5',
        title: 'Restaurante Universitário',
        coordinates: [-35.98390097146980, -8.225041439112980],
        description: 'Inaugurado em março de 2017, possui uma área física de 833,52 m² com capacidade de atendimento de 269 comensais sentados.',
        link: 'https://www.ufpe.br/rucaa',
        image: 'restaurante-universitario'
    },

    {
        id: '6',
        title: 'Quadra Poliesportiva',
        coordinates: [-35.9845253601383, -8.224464897137520],
        description: 'Local para prática de esportes e atividades físicas.',
        link: 'https://www.ufpe.br/esportes',
        image: '@/assets/maps/images/auditorio-mestre-vitalino.png'
    },
    
]