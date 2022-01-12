import { Connection, EntityColumnNotFound, Repository } from "typeorm";
import { BaseService } from "./base";
import { Conta } from "../models/contas";

export class ContaService implements BaseService {

    connection: Connection;
    repository: Repository<Conta>;

    constructor(connection: Connection) {
        this.connection = connection;
        this.repository = connection.getRepository(Conta);
    }

    async getAll(): Promise<Conta[]> {
        return await this.repository.find();
    }

    async getOne(id: number): Promise<Conta | undefined> {
        return await this.repository.findOne(id);
    }

    async create(entity: any): Promise<Conta | undefined> {
        let contas;

        if (entity.saldo && entity.tipoConta && entity.instituicaoFinanceira) {
            contas = new Conta();

            contas.saldo = entity.saldo;
            contas.tipoConta = entity.tipoConta;
            contas.instituicaoFinanceira = entity.instituicaoFinanceira;
    
            await this.repository.save(contas);
        }

        return contas;
    }

    async update(id: number, values: any): Promise<Conta | undefined> {
        const contas = await this.repository.findOne(id);

        if ((contas !== undefined) && (values !== {})) {
            if (values.saldo) contas.saldo = values.saldo;
            if (values.tipoConta) contas.tipoConta = values.tipoConta;
            if (values.instituicaoFinanceira) contas.instituicaoFinanceira = values.instituicaoFinanceira;

            await this.repository.save(contas);
        }

        return contas;
    }

    async delete(id: number): Promise<Conta | undefined> {
        const contas = await this.repository.findOne(id);

        if (contas !== undefined) {
            await this.repository.remove(contas);
        }

        return contas;
    }

}