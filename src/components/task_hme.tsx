import "../Style/task_hme.css";
import { HeaderSec } from "./header_sec";
import { FaTasks } from "react-icons/fa";

function TaskHme() {
  return (
    <div className="task__hme">
      <HeaderSec icon={<FaTasks size={12}/>} />
      <div className="task__ctn">
        <h1>Task Page</h1>
      </div>
    </div>
  );
}

export default TaskHme;
