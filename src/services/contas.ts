import { Connection, EntityColumnNotFound, Repository } from "typeorm";
import { BaseService } from "./base";
import { Conta } from "../models/contas";

interface ContaInterface {
    transferencia(body: any): Promise<any |undefined>; 
}

export class ContaService implements BaseService, ContaInterface {

    connection: Connection;
    repository: Repository<Conta>;

    constructor(connection: Connection) {
        this.connection = connection;
        this.repository = connection.getRepository(Conta);
    }

    async getAll(queryParameters: any): Promise<Conta[] | undefined> {
        try {

            if(queryParameters.saldo){
            }
    
            return await this.repository.find(queryParameters);
            
           }
           catch {
                console.log("Error in search")
           }
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

    async transferencia(body: any): Promise<any | undefined> {

        try{

            if(body.origem && body.destino && body.valor) {

               let origem = await this.repository.findOne(body.origem);
               let destino = await this.repository.findOne(body.destino);

               if ((origem !== undefined) && (destino !== undefined)) {
                   origem.saldo = origem.saldo - body.valor;
                   destino.saldo = destino.saldo + body.valor;

                   this.repository.save(origem);
                   this.repository.save(destino);

                   return {
                    saldoOrigem: origem?.saldo,
                    saldoDestino: destino?.saldo
                   }
               }

            }

        }

        catch{
            console.log("Internal server error")
        }
      

    }

    async delete(id: number): Promise<Conta | undefined> {
        const contas = await this.repository.findOne(id);

        if (contas !== undefined) {
            await this.repository.remove(contas);
        }

        return contas;
    }

}