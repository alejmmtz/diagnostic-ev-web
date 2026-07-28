export interface Task {
  id: number;
  title: string;
  completed: boolean;
  date: Date;
}

export interface CreateTaskDTO {
  title: string;
}

export interface updateTaskDTO {
  title: string;
  completed: boolean;
  date: Date;
}
