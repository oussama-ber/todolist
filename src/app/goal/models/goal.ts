import { Task } from "./task";

export interface Goal {
  id: number;
  title: string;
  description: string;
  createdDate: Date;
  deadline: Date;
  progress: number;
  tasks: Task[]
}
