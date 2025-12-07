import "../Style/btn_mng.css"
import { BsFillGrid3X3GapFill } from "react-icons/bs"

export const BtnMng: React.FC = () => {
    return (
        <div className="btn__mng">
                <BsFillGrid3X3GapFill size={15} color="#fff"/>
            <div className="txt__btn">
                <p>Cards</p>
            </div>
        </div>
    )
}