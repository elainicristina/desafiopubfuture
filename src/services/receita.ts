import { Connection, EntityColumnNotFound, Repository } from "typeorm";
import { BaseService } from "./base";
import { Receita } from "../models/receita";

export class ReceitaService implements BaseService {

    connection: Connection;
    repository: Repository<Receita>;

    constructor(connection: Connection) {
        this.connection = connection;
        this.repository = connection.getRepository(Receita);
    }

    async getAll(): Promise<Receita[]> {
        return await this.repository.find();
    }

    async getOne(id: number): Promise<Receita | undefined> {
        let receita;
        return await this.repository.findOne(id);
    }

    async create(entity: any): Promise<Receita | undefined> {
        let receitas;

        if (entity.valor && entity.dataRecebimento && entity.dataRecebimentoEsperado 
            && entity.descricao && entity.conta && entity.tipoReceita) {
            receitas = new Receita();

            receitas.valor = entity.valor;
            receitas.dataRecebimento = entity.dataRecebimento;
            receitas.dataRecebimentoEsperado = entity.dataRecebimentoEsperado;
            receitas.descricao = entity.descricao;
            receitas.conta = entity.conta;
            receitas.tipoReceita = entity.tipoReceita;
    
            await this.repository.save(receitas);
        }

        return receitas;
    }

    async update(id: number, values: any): Promise<Receita | undefined> {
        const receitas = await this.repository.findOne(id);

        if ((receitas !== undefined) && (values !== {})) {
            if (values.valor) receitas.valor = values.saldo;
            if (values.dataRecebimento) receitas.dataRecebimento = values.dataRecebimento;
            if (values.dataRecebimentoEsperado) receitas.dataRecebimentoEsperado = values.dataRecebimentoEsperado;
            if (values.descricao) receitas.descricao = values.descricao;
            if (values.conta) receitas.conta = values.conta;
            if (values.tipoReceita) receitas.tipoReceita = values.tipoReceita;

            await this.repository.save(receitas);
        }

        return receitas;
    }

    async delete(id: number): Promise<Receita | undefined> {
        const receitas = await this.repository.findOne(id);

        if (receitas !== undefined) {
            await this.repository.remove(receitas);
        }

        return receitas;
    }

}