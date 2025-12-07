import { FaEllipsisVertical } from "react-icons/fa6";
import "../Style/profile_box.css";
import BtnSide from "./btn_side";

function ProfileBox() {
    return (
        <div className="main__box__ctn">
            <div className="prl__sec">
                <div className="prl">
                    <div className="prl__nme__img">
                        <div className="prl__img">
                        </div>
                        <div className="prl__attr">
                            <p className="prl__usn">Hallo K.</p>
                            <p className="prl__type">Admin</p>
                        </div>
                    </div>
                    <div className="btn__prl__mnu">
                        <BtnSide icon={<FaEllipsisVertical size={20} />} />
                    </div>
                </div>
                <p className="prl__date">Tue. 12th 2025</p>
            </div>
            <div className="type__sec"></div>
        </div>
    );
}

export default ProfileBox;