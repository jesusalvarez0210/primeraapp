import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";


@Entity('categorias')
export class Category {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    descripcion:string;

    @Column()
    color:string;

    @Column({length:250})
    imagen:string;
}
