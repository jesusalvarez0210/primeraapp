import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('usuarios')
export class Usuario {

    @PrimaryGeneratedColumn()
    id:number;

    @Column({length: 50})
    nombre: string;

    @Column({length: 50})
    apellido: string;

    @Column()
    edad: number;

    @Column({length: 300})
    avatar: string;

}
