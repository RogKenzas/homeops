import { FiFilter } from "react-icons/fi";
import "../Style/task_hme.css";
import { ExptBtn } from "./expt_btn";
import { HeaderSec } from "./header_sec";
import { FaTasks } from "react-icons/fa";
import { CgAdd } from "react-icons/cg";
import { CiSettings } from "react-icons/ci";
import { StateTsk } from "./state_tsk";
import { FaEllipsisVertical } from "react-icons/fa6";
import { LiaAccessibleIcon } from "react-icons/lia";
import { BiCheckCircle, BiRevision } from "react-icons/bi";

interface TaskHmeProps {
    isCtnDashVisible: boolean;
}

function TaskHme({ isCtnDashVisible }: TaskHmeProps) {
  return (
    <div className={`task__hme ${!isCtnDashVisible ? 'task__hme--expanded' : ''}`}>
      <HeaderSec icon={<FaTasks size={12} />} isCtnDashVisible={isCtnDashVisible} />
      <div className="task__ctn">
        <h2>Task Page</h2>

        <div className="display__icn">
          <div className="icn__btn">
            <CiSettings size={20} color="#5e5e5eff" style={{ cursor: "pointer" }} />
            <FiFilter size={17} color="#5e5e5eff" style={{ cursor: "pointer" }} />
          </div>
          <ExptBtn icon={<CgAdd />} label="Create" onClick={() => console.log("Create clicked")} />
        </div>
      </div>
      <div className={`state__sec ${!isCtnDashVisible ? 'state__sec--expanded' : ''}`}>
        <StateTsk iconSte={<FaTasks size={18} />} label="To do List" nbTsk={5} iconAdd={<CgAdd size={20} color="#aaaa" />} iconEllip={<FaEllipsisVertical />} isCtnDashVisible={isCtnDashVisible} />
        <StateTsk iconSte={<LiaAccessibleIcon size={18} />} label="In Progress" nbTsk={5} iconAdd={<CgAdd size={20} color="#aaaa" />} iconEllip={<FaEllipsisVertical />} isCtnDashVisible={isCtnDashVisible} />
        <StateTsk iconSte={<BiRevision size={18} />} label="Review" nbTsk={5} iconAdd={<CgAdd size={20} color="#aaaa" />} iconEllip={<FaEllipsisVertical />} isCtnDashVisible={isCtnDashVisible} />
        <StateTsk iconSte={<BiCheckCircle size={18} />} label="Done" nbTsk={5} iconAdd={<CgAdd size={20} color="#aaaa" />} iconEllip={<FaEllipsisVertical />} isCtnDashVisible={isCtnDashVisible} />
      </div>
    </div>
  );
}

export default TaskHme;
