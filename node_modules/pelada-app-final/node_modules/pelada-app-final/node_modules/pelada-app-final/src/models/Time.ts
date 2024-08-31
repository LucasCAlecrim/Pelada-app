import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Jogador } from './Jogador';

@Entity()
export class Time {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    nome!: string;

    @OneToMany(() => Jogador, (jogador) => jogador.time)
    jogadores!: Jogador[];
}
