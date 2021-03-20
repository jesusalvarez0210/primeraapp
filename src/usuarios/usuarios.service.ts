import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './usuario.entity';

@Injectable()
export class UsuariosService {

    constructor(@InjectRepository(Usuario) private rep: Repository<Usuario>){


    }

   async obtenerUsuarios(usuario: Usuario): Promise<Usuario[]>{
       return await this.rep.find();


   }

   async obtenerUsuario (_id: number): Promise<Usuario[]>{
       return await this.rep.find({
        select: ["id", "nombre", "apellido"],
        where:[
            {"id": _id}
        ]
       });
       
   }

   async crearUsuario(usuario: Usuario){
        await this.rep.insert(usuario);
   }

    async actualizarUsuario(usuario: Usuario){
        await this.rep.update({id: usuario.id},usuario);
   }

   async borrarUsuario (usuario: Usuario){
       await this.rep.delete(usuario);
   }

}
