import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { TaskDto } from './task.dto';

@Injectable()
export class TaskService {
  private tasks: TaskDto[] = [];

  create(task: TaskDto) {
    this.tasks.push(task);
  }

  findById(id: string): TaskDto {
    const foundTask = this.tasks.find((t) => t.id === id);

    if (foundTask) {
      return foundTask;
    }

    throw new HttpException(
      `Task with id ${id} not found.`,
      HttpStatus.NOT_FOUND,
    );
  }

  update(task: TaskDto): void {
    const taskIndex = this.tasks.findIndex((t) => t.id === task.id);

    if (taskIndex > 0) {
      this.tasks[taskIndex] = task;
      return;
    }

    throw new HttpException(
      `Task with id ${task.id} not found`,
      HttpStatus.BAD_REQUEST,
    );
  }
}
