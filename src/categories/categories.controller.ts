import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';

@Controller('categorias')
export class CategoriesController {
  constructor(private servicio: CategoriesService) {}

  @Get()
  getAll(@Param() params) {
    return this.servicio.obtenerCategorias(params.id);
  }

  @Get(':id')
  get(@Param() params) {
    return this.servicio.obtenerCategoria(params.id);
  }

  @Post()
  create(@Body() categoria:Category) {
    this.servicio.crearCategoria(categoria);
  }

  

  @Put(':id')
  update(@Body() categoria:Category) {
    return this.servicio.actualizarCategoria(categoria);
  }

  @Delete(':id')
  delete(@Param() params) {
    return this.servicio.borrarCategoria(params.id);
  }
}