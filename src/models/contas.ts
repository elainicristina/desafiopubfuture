import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('contas')
export class Conta {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    saldo: number;

    @Column()
    tipoConta: string;

    @Column()
    instituicaoFinanceira: string;

}