import { Module } from '@nestjs/common';
import { ToolController } from './tool.controller';
import { ToolService } from './tool.service';

@Module({
  
  controllers: [ToolController],
  
  
  providers: [ToolService],
  
 
  exports: [ToolService],
})
export class ToolModule {}