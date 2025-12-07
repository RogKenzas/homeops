import { IoBulbOutline, IoCalendarOutline, IoHomeOutline } from "react-icons/io5";
import ToggleButtonWithIcon from "./btn__toggle";
import BtnSide from "./btn_side";
import { IoIosNotificationsOutline } from "react-icons/io";
import "../Style/lst_side.css"

interface LstSideProps {
    isCtnDashVisible: boolean;
    onToggle: () => void;
}

function LstSide({ isCtnDashVisible, onToggle }: LstSideProps) {
    return (
        <>
            <div className="fst__side__st">
                <ToggleButtonWithIcon isOn={isCtnDashVisible} onToggle={onToggle} />
                <div className="elm__btn">
                    <BtnSide icon={<IoHomeOutline size={18} />} />
                </div>
                <div className="elm__btn">
                    <BtnSide icon={<IoHomeOutline size={18} />} />
                </div>
                <div className="elm__btn">
                    <BtnSide icon={<IoBulbOutline size={18} />} />
                </div>
                <div className="elm__btn">
                    <BtnSide icon={<IoIosNotificationsOutline size={18} />} />
                </div>
                <div className="elm__btn">
                    <BtnSide icon={<IoCalendarOutline size={18} />} />
                </div>
            </div>
        </>
    );
}

export default LstSide;