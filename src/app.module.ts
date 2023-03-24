import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlacementsModule } from './placements/placements.module';
import { TareaModule } from './tarea/tarea.module';

@Module({
  imports: [PlacementsModule, TareaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
