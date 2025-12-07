import CtnDash from './ctn__dash';
import LstSide from './lst__side';
import "../Style/fst_side.css"

interface FirstSidebarProps {
    isCtnDashVisible: boolean;
    onToggle: () => void;
}

function FirstSidebar({ isCtnDashVisible, onToggle }: FirstSidebarProps) {
    return (
        <div className={`fst__side ${!isCtnDashVisible ? 'ctn__dash--hidden' : ''}`}>
            <div className="lst__side">
                <LstSide isCtnDashVisible={isCtnDashVisible} onToggle={onToggle} />
            </div>
            <div className={!isCtnDashVisible ? 'ctn__dash--collapsed' : ''}>
                <CtnDash />
            </div>
        </div>
    );
}

export default FirstSidebar;