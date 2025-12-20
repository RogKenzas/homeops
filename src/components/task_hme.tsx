import { FiFilter } from "react-icons/fi";
import "../Style/task_hme.css";
import { ExptBtn } from "./expt_btn";
import { HeaderSec } from "./header_sec";
import { FaTasks } from "react-icons/fa";
import { CgAdd } from "react-icons/cg";
import { CiSettings } from "react-icons/ci";
import { FaEllipsisVertical } from "react-icons/fa6";
import { LiaAccessibleIcon } from "react-icons/lia";
import { BiCheckCircle, BiRevision } from "react-icons/bi";
import { TaskSpace } from "./task_space";
import Modal from "./modal";
import React from "react";

interface TaskHmeProps {
  isCtnDashVisible: boolean;
}

const TaskHme: React.FC<TaskHmeProps> = ({ isCtnDashVisible }) => {

  const [viewModal, setViewModal] = React.useState(false);

  const handleCreateClick = () => {
    setViewModal(true);
    console.log("Create button clicked");
    console.log('viewModal:', viewModal);
    
  };

  return (
    <div className={`task__hme ${!isCtnDashVisible ? 'task__hme--expanded' : ''}`}>
      <Modal isOpen={viewModal} onClose={() => setViewModal(false)} />
      <HeaderSec icon={<FaTasks size={12} />} isCtnDashVisible={isCtnDashVisible} />
      <div className="task__ctn">
        <h2>Task Page</h2>

        <div className="display__icn">
          <div className="icn__btn">
            <CiSettings size={20} color="#5e5e5eff" style={{ cursor: "pointer" }} />
            <FiFilter size={17} color="#5e5e5eff" style={{ cursor: "pointer" }} />
          </div>
          <ExptBtn icon={<CgAdd />} label="Create" onClick={handleCreateClick} />
        </div>
      </div>
      <div className={`state__sec ${!isCtnDashVisible ? 'state__sec--expanded' : ''}`}>
        <TaskSpace
          stateProps={{
            iconSte: <FaTasks size={18} />,
            label: "To do List",
            nbTsk: 0,
            iconAdd: <CgAdd size={20} color="#aaaa" />,
            iconEllip: <FaEllipsisVertical />,
          }}
          isCtnDashVisible={isCtnDashVisible}
        />

        <TaskSpace
          stateProps={{
            iconSte: <LiaAccessibleIcon size={18} />,
            label: "In Progress",
            nbTsk: 0,
            iconAdd: <CgAdd size={20} color="#aaaa" />,
            iconEllip: <FaEllipsisVertical />,
          }}
          isCtnDashVisible={isCtnDashVisible}
        />

        <TaskSpace
          stateProps={{
            iconSte: <BiRevision size={18} />,
            label: "Review",
            nbTsk: 0,
            iconAdd: <CgAdd size={20} color="#aaaa" />,
            iconEllip: <FaEllipsisVertical />,
          }}
          isCtnDashVisible={isCtnDashVisible}
        />

        <TaskSpace
          stateProps={{
            iconSte: <BiCheckCircle size={18} />,
            label: "Done",
            nbTsk: 0,
            iconAdd: <CgAdd size={20} color="#aaaa" />,
            iconEllip: <FaEllipsisVertical />,
          }}
          isCtnDashVisible={isCtnDashVisible}
        />


      </div>
    </div>
  );
}

export default TaskHme;
