import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TaskDto } from './task.dto';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  create(@Body() task: TaskDto): void {
    this.taskService.create(task);
  }

  @Get()
  findAll(): Array<TaskDto> {
    return this.taskService.findAll();
  }

  @Get('/:id')
  findById(@Param('id') id: string): TaskDto {
    return this.taskService.findById(id);
  }

  @Put()
  update(@Body() task: TaskDto): void {
    this.taskService.update(task);
  }

  @Delete('/:id')
  delete(@Param('id') id: string): void {
    this.taskService.delete(id);
  }
}
