import type { Task as TaskModel } from "../models/tasks";
import { StateTsk } from "./state_tsk";
import type { StateTskProps } from "./state_tsk";
import React, { useState } from "react";

interface TaskSpaceProps {
    stateProps: Omit<StateTskProps, "isCtnDashVisible">;
    isCtnDashVisible: boolean;
}

export const TaskSpace: React.FC<TaskSpaceProps> = ({ isCtnDashVisible, stateProps }) => {

    const [tasksList, setTasks] = useState<TaskModel[]>([]);

    const newTask: TaskModel = {
        id: Date.now().toString(),
        title: "",
        description: "",
        taskOwner: "",
        createdAt: new Date(),
        updatedAt: new Date(),
        assignee: "",
        priority: "Low",
        tasks: [],
        status: "To do List"

    }

    const handleAddTask = () => {
        setTasks(prev =>[...prev, newTask]
        );
    };

    return (
        <div className="stateTsk__id">
            <StateTsk {...stateProps} nbTsk={tasksList.length} onclick={handleAddTask} isCtnDashVisible={isCtnDashVisible} />

            <div className="tasks">

                {tasksList.length === 0 ? (
                    <p>No tasks available.</p>
                ) : (
                    tasksList.map((task) => (
                        <div className="task__item">
                            <h3>{task.title}</h3>
                            <p>{task.description}</p>
                            <p>Owner: {task.taskOwner}</p>
                        </div>
                    ))
                )}

            </div>
        </div>
    );
};