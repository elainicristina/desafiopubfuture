import { Connection, EntityColumnNotFound, Repository } from "typeorm";
import { BaseService } from "./base";
import { Despesa } from "../models/desespesas";

export class DespesaService implements BaseService {

    connection: Connection;
    repository: Repository<Despesa>;

    constructor(connection: Connection) {
        this.connection = connection;
        this.repository = connection.getRepository(Despesa);
    }

    async getAll(queryParameters: any): Promise<object[] |undefined> {

       try {

        return await this.repository.find(queryParameters);
        
       }
       catch {

        console.log("Error in search")

       }
    }

    async getOne(id: number): Promise<Despesa | undefined> {
        return await this.repository.findOne(id);
    }

    async create(entity: any): Promise<Despesa | undefined> {
        let despesas;

        if (entity.valor && entity.dataPagamento && entity.dataPagamentoEsperado 
            && entity.tipoDespesa && entity.conta) {
            despesas = new Despesa();

            despesas.valor = entity.valor;
            despesas.dataPagamento = entity.dataPagamento;
            despesas.dataPagamentoEsperado = entity.dataPagamentoEsperado;
            despesas.tipoDespesa = entity.tipoDespesa;
            despesas.conta = entity.conta;
    
            await this.repository.save(despesas);
        }

        return despesas;
    }

    async update(id: number, values: any): Promise<Despesa | undefined> {
        const despesas = await this.repository.findOne(id);

        if ((despesas !== undefined) && (values !== {})) {
            if (values.valor) despesas.valor = values.saldo;
            if (values.dataPagamento) despesas.dataPagamento = values.dataPagamento;
            if (values.dataPagamentoEsperado) despesas.dataPagamentoEsperado = values.dataPagamentoEsperado;
            if (values.tipoDespesa) despesas.tipoDespesa = values.tipoDespesa;
            if (values.conta) despesas.conta = values.conta;

            await this.repository.save(despesas);
        }

        return despesas;
    }

    async delete(id: number): Promise<Despesa | undefined> {
        const despesas = await this.repository.findOne(id);

        if (despesas !== undefined) {
            await this.repository.remove(despesas);
        }

        return despesas;
    }

}