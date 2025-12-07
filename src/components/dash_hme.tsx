import { FiBox } from "react-icons/fi";
import "../Style/dash_hme.css"
import { HeaderSec } from "./header_sec";
import { ExptBtn } from "./expt_btn";

function DashHme() {
    return (
        <div className="dash__hme">
            <HeaderSec icon = {<FiBox size={14}/>}/>
            <div className="dash__ctn">
                <h2>Dashboard</h2>
                <ExptBtn/>
            </div>
        </div>  
    );
};

export default DashHme;