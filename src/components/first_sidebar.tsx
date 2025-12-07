import { useState } from 'react';
import CtnDash from './ctn__dash';
import LstSide from './lst__side';
import "../Style/fst_side.css"

function FirstSidebar() {
    const [isCtnDashVisible, setIsCtnDashVisible] = useState(true);

    const toggleCtnDash = () => {
        setIsCtnDashVisible(!isCtnDashVisible);
    };

    return (
        <div className={`fst__side ${!isCtnDashVisible ? 'ctn__dash--hidden' : ''}`}>
            <div className="lst__side">
                <LstSide isCtnDashVisible={isCtnDashVisible} onToggle={toggleCtnDash} />
            </div>
            <div className={!isCtnDashVisible ? 'ctn__dash--collapsed' : ''}>
                <CtnDash />
            </div>
        </div>
    );
}

export default FirstSidebar;