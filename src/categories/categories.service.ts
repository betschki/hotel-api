import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from './dtos/create-category.dto';
import { Category } from './categories.entity';
import { Hotel } from 'src/hotels/hotels.entity';

@Injectable()
export class CategoriesService {
  constructor(@InjectRepository(Category) private repo: Repository<Category>) {}

  find() {
    return this.repo.find();
  }

  findMany(params: Partial<Category>) {
    return this.repo.find(params);
  }

  async findOne(id: number) {
    const category: any = await this.repo.findOne(id);
    if (!category) {
      throw new NotFoundException(`Room Category with id ${id} not found.`);
    }

    return category as Category;
  }

  async create(category: CreateCategoryDto, hotel: Hotel) {
    category.hotel = hotel;
    const newCategory = this.repo.create(category);
    return this.repo.save(newCategory);
  }

  async update(id: number, attributes: Partial<Category>) {
    const category = await this.findOne(id);
    if (!category) {
      throw new NotFoundException(`Room Category with id ${id} not found.`);
    }

    Object.assign(category, attributes);

    return this.repo.save(category);
  }

  async remove(id: number) {
    const category = await this.findOne(id);
    if (!category) {
      throw new NotFoundException(`Room Category with id ${id} not found`);
    }

    return this.repo.remove(category);
  }
}
