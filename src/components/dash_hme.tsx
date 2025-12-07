import { FiBox, FiDownloadCloud } from "react-icons/fi";
import "../Style/dash_hme.css"
import { HeaderSec } from "./header_sec";
import { ExptBtn } from "./expt_btn";

interface DashHmeProps {
    isCtnDashVisible: boolean;
}

function DashHme({ isCtnDashVisible }: DashHmeProps) {
    return (
        <div className="dash__hme">
            <HeaderSec icon={<FiBox size={14}/>} isCtnDashVisible={isCtnDashVisible} />
            <div className="dash__ctn">
                <h2>Dashboard</h2>
                <ExptBtn icon={<FiDownloadCloud />} label="Export" onClick={() => console.log("Export clicked")} />
            </div>
        </div>
    );
};

export default DashHme;