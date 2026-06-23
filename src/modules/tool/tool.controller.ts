import {
  Controller,
  Get,
  Post,
  Put,
  Patch,
  Delete,
  Param,
  Query,
  Body,
} from '@nestjs/common';

import { ToolService } from './tool.service';
import { CreateToolDto } from './dto/create-tool.dto';
import { UpdateToolDto } from './dto/update-tool.dto';

@Controller('tools')
export class ToolController {
  constructor(private readonly toolService: ToolService) {}

  // 1. Create Tool
  @Post()
  create(@Body() createToolDto: CreateToolDto) {
    return this.toolService.create(createToolDto);
  }

  // 2. Get All Tools with Pagination
  @Get()
  findAll(@Query('page') page: number, @Query('limit') limit: number) {
    return this.toolService.findAll(page, limit);
  }

  // 3. Get Tool By ID
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.toolService.findOne(id);
  }

  // 4. Search Tool By Category
  @Get('search/category')
  findByCategory(@Query('category') category: string) {
    return this.toolService.findByCategory(category);
  }

  // 5. Get Tool Availability/Status Details
  @Get(':id/availability')
  getAvailability(@Param('id') id: string) {
    return this.toolService.getAvailability(id);
  }

  // 6. Full Update Tool Data
  @Put(':id')
  update(@Param('id') id: string, @Body() updateToolDto: UpdateToolDto) {
    return this.toolService.update(id, updateToolDto);
  }

  // 7. Partial Update Tool Status (PATCH standard - e.g., Available to Rented)
  @Patch(':id/status')
  updateStatus(@Param('id') id: string, @Body('status') status: string) {
    return this.toolService.updateStatus(id, status);
  }

  // 8. Delete Tool From Platform
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.toolService.remove(id);
  }
}
