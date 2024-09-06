type Location = {

    title: string;
    description?: string;
    coordinates: number[]; // Longitude e Latitude
    link?: string;
}

export const locations: Location[] = [
    {
        title: 'Restaurante Universitário',
        coordinates: [-35.98390097146980, -8.225041439112980]
    },
    {
        title: 'Assistência Estudantil',
        coordinates: [-35.984065136523500, -8.22462830674169]
    },
    {
        title: 'Biblioteca do Agreste',
        coordinates: [-35.98351221925370, -8.224738504197040]
    },
    {
        title: 'Quadra Poliesportiva',
        coordinates: [-35.9845253601383, -8.224464897137520]
    },
    {
        title: 'Auditório Luiz Gonzaga',
        coordinates: [-35.984909310266900, -8.224893807125240]
    },
    {
        title: 'Auditório Mestre Vitalino',
        coordinates: [-35.98184430303580, -8.225231577647060]
    }
]