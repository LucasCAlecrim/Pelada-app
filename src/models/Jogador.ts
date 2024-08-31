import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Time } from './Time';

@Entity()
export class Jogador {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    nome!: string;

    @Column()
    apelido!: string;

    @Column()
    gols!: number;

    @Column()
    assistencias!: number;

    @Column()
    vitorias!: number;

    @Column()
    posicao!: string;

    @ManyToOne(() => Time, (time) => time.jogadores)
    time: Time | undefined;
}
