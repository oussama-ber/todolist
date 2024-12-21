export interface Task{
    id: number;
    title: string;
    description: string;
    
    createdBy: string;
    createdDate: Date;
    modifiedBy: string;
    modifiedDate: Date;
}