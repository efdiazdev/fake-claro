import { Injectable } from '@nestjs/common';
import { CreatePlacementDto } from './dto/create-placement.dto';
import { UpdatePlacementDto } from './dto/update-placement.dto';

@Injectable()
export class PlacementsService {
  private generatedNumbers: number[] = [];

  create(createPlacementDto: CreatePlacementDto) {
    return 'This action adds a new placement';
  }

  findAll() {
    return `This action returns all placements`;
  }

  createIdProcess() {
    let randomNumber = Math.floor(Math.random() * 1000) + 1;
    while (this.generatedNumbers.includes(randomNumber)) {
      randomNumber = Math.floor(Math.random() * 1000) + 1;
    }
    this.generatedNumbers.push(randomNumber);
    return {idProcess:randomNumber};
  }

  findOne(id: number) {
    return `This action returns a #${id} placement`;
  }

  update(id: number, updatePlacementDto: UpdatePlacementDto) {
    return `This action updates a #${id} placement`;
  }

  remove(id: number) {
    return `This action removes a #${id} placement`;
  }
}
