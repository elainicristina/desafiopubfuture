import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('receitas')
export class Receita {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    valor: number;

    @Column()
    dataRecebimento: number;

    @Column()
    dataRecebimentoEsperado: number;

    @Column()
    descricao: string;

    @Column()
    conta: string;

    @Column()
    tipoReceita: string;

}