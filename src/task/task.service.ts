import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { TaskDto } from './task.dto';

@Injectable()
export class TaskService {
  private tasks: TaskDto[] = [];

  create(task: TaskDto): void {
    this.tasks.push(task);
  }

  findAll(): Array<TaskDto> {
    const allTasks: TaskDto[] = [];
    this.tasks.map((task) => {
      allTasks.unshift(task);
    });

    return allTasks;
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

    if (taskIndex >= 0) {
      this.tasks[taskIndex] = task;
      return;
    }

    throw new HttpException(
      `Task with id ${task.id} not found`,
      HttpStatus.NOT_FOUND,
    );
  }

  delete(id: string): void {
    const index = this.tasks.findIndex((t) => t.id === id);

    if (index !== -1) {
      this.tasks.splice(index, 1);
      return;
    }

    throw new HttpException(
      `Task with id ${id} not found`,
      HttpStatus.NOT_FOUND,
    );
  }
}
