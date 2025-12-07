import { BiFolder } from "react-icons/bi";
import ItemSidebar from "./item_sidebar";
import ProfileBox from "./profile_box";
import { FaChevronRight, FaTasks } from "react-icons/fa";
import { GrDashboard } from "react-icons/gr";
import "../Style/ctn_dash.css"
import { navigate } from "../routers/route";
import { FiBox } from "react-icons/fi";

function CtnDash() {
    return (
        <>
            <div className="fst__ctn__side">
                <ProfileBox />
                <p>OVERVIEW</p>
                <div className="list__ctn">
                    <div className="item__ctn" onClick={() => navigate("dash")}> 
                        {/* active */}
                        <ItemSidebar icon={<FiBox size={20} />} label={"Dashboard"} />
                        <div className="arrow__bx">
                            <FaChevronRight size={8} />
                        </div>
                    </div>
                    <div className="item__ctn" onClick={() => navigate("task")}>
                        <ItemSidebar icon={<FaTasks size={20} />} label={"Task"} />
                        <div className="arrow__bx">
                            <FaChevronRight size={8} />
                        </div>
                    </div>
                    <div className="item__ctn" onClick={() => navigate("plans")}>
                        <ItemSidebar icon={<BiFolder size={20} />} label={"Plans"} />
                        <div className="arrow__bx">
                            <FaChevronRight size={8} />
                        </div>
                    </div>
                    <div className="item__ctn">
                        <ItemSidebar icon={<GrDashboard size={20} />} label={"undefined"} />
                        <div className="arrow__bx">
                            <FaChevronRight size={8} />
                        </div>
                    </div>
                    <div className="item__ctn">
                        <ItemSidebar icon={<GrDashboard size={20} />} label={"undefined"} />
                        <div className="arrow__bx">
                            <FaChevronRight size={8} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CtnDash;