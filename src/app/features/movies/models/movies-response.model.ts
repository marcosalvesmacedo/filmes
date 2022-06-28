export interface MoviesResponseModel {
    filmes: filme[]
}

export interface filme {
    codigo: number;
    titulo: string;
    descricao: string;
    anoLancamento: number;
    diasDeAluguel: number;
    valorAluguel: number;
    duracao: string;
    valorDeCompra: number;
    especiais: string;
}
