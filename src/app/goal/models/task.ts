export interface Task {
  id: number;
  title: string;
  description: string;
  createdDate: Date;
  deadline: Date;
  progress: number;
  completed: boolean;
}
