import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PlacementsService } from './placements.service';
import { CreatePlacementDto } from './dto/create-placement.dto';
import { UpdatePlacementDto } from './dto/update-placement.dto';

@Controller('placements')
export class PlacementsController {
  constructor(private readonly placementsService: PlacementsService) { }

  @Post()
  create(@Body() createPlacementDto: CreatePlacementDto) {
    return this.placementsService.create(createPlacementDto);
  }

  @Get()
  findAll() {
    return this.placementsService.findAll();
  }

  @Post('/strategy/cube')
  getCubeIdProcess() {
    return this.placementsService.createIdProcess();
  }

  @Post('/hashes')
  getPlacementsIdProcess() {
    return this.placementsService.createIdProcess();
  }

  @Get(':idProcess')
  getStatusProcess(@Param('idProcess') idProcess: number) {
    return this.placementsService.getStatusProcess(idProcess);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePlacementDto: UpdatePlacementDto) {
    return this.placementsService.update(+id, updatePlacementDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.placementsService.remove(+id);
  }
}
