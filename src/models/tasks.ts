export interface Task {
    id: String;
    title: string;
    description: string;
    taskOwner: string;
    assignee: string;
    priority: "Low" | "Medium" | "High";
    tasks: string[];
    status: "To do List" | "In Progress" | "Review" | "Done";
    createdAt: Date;
    updatedAt: Date;
}