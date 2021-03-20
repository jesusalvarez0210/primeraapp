import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Repository } from 'typeorm';
import { Category } from './entities/category.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CategoriesService {

  constructor(@InjectRepository(Category) private rep: Repository<Category> ){
    
  }

  async crearCategoria(categoria:Category){
    await this.rep.insert(categoria);
  }

  async obtenerCategorias(categoria:Category): Promise<Category[]> {
     return await this.rep.find();
  }

  async obtenerCategoria(id: number): Promise<Category[]>{
    return await this.rep.find({
      select: ['id', 'descripcion', 'color', 'imagen'],
      where: [{'id':id}]
    });
  }

  async actualizarCategoria(categoria:Category) {
    return await this.rep.update({id: categoria.id}, categoria);
  }

  async borrarCategoria(categoria:Category) {
    return await this.rep.delete(categoria);
  }
}