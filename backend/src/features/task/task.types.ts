export interface Task {
  id: number;
  title: string;
  completed: boolean;
  date: Date;
}

export interface createTaskDTO {
  title: string;
  completed: boolean;
  date: Date;
}
