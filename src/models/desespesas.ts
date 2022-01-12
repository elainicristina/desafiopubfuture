import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('despesas')
export class Despesa {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    valor: number;

    @Column()
    dataPagamento: Date;

    @Column()
    dataPagamentoEsperado: Date;

    @Column()
    tipoDespesa: string;

    @Column()
    conta: string;
    
    static filter: any;

}