import { Injectable } from '@nestjs/common';
import { CreatePlacementDto } from './dto/create-placement.dto';
import { UpdatePlacementDto } from './dto/update-placement.dto';

interface ProcessStatus {
  progress: number;
  status: string;
  idProcess: number;
}

@Injectable()
export class PlacementsService {
  private generatedProcess: ProcessStatus[] = [];

  create(createPlacementDto: CreatePlacementDto) {
    return 'This action adds a new placement';
  }

  findAll() {
    return `This action returns all placements`;
  }

  createIdProcess() {
    let processStatus = {
      progress: 0,
      status: "Processing",
      idProcess: 0
    }
    let randomNumber = Math.floor(Math.random() * 1000) + 1;
    while (this.generatedProcess.map(p => p.idProcess).includes(randomNumber)) {
      randomNumber = Math.floor(Math.random() * 1000) + 1;
    }
    processStatus = { ...processStatus, idProcess: randomNumber }
    this.generatedProcess.push(processStatus);
    console.log(this.generatedProcess)
    return { idProcess: randomNumber };
  }

  getStatusProcess(idProcess: number) {
    console.log(idProcess)
    let processStatus = this.generatedProcess.find(p => p.idProcess == idProcess ? p : null);
    console.log(processStatus)
    if (processStatus.progress < 80) {
      processStatus.progress += 20;
      this.generatedProcess = this.generatedProcess.map(p => p.idProcess == idProcess ? processStatus : p);
      console.log(this.generatedProcess)
      return processStatus;
    }
    else {
      const processStatus = {
        progress: 100,
        status: "Finished",
        idProcess:parseInt(idProcess.toString())
      };
      return processStatus;
    }
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
