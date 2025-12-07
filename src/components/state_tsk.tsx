import type { ReactNode } from "react"
import "../Style/state_tsk.css"

interface StateTskProps {
    iconSte: ReactNode
    label: string,
    nbTsk: number
    iconAdd: ReactNode
    iconEllip: ReactNode
    isCtnDashVisible: boolean;
}

const COLORS: Record<string, { bg: string; border: string }> = {
    "To do List": { bg: "#ffd13c59", border: "#ffd13c" },
    "In Progress": { bg: "#b28bff59", border: "#b28bff" },
    "Review": { bg: "#5ee0ff59", border: "#5ee0ff" },
    "Done": { bg: "#7bff9b59", border: "#7bff9b" },
};


export const StateTsk: React.FC<StateTskProps> = ({ label, iconSte, nbTsk, iconAdd, iconEllip, isCtnDashVisible }) => {

    const colors = COLORS[label] || COLORS["To do List"];

    return (
        <div
            className={`state__tsk ${!isCtnDashVisible ? 'state__tsk--expanded' : ''}`}
            style={{
                backgroundColor: colors.bg,
                borderColor: colors.border,
            }}
        >
            <div className="left__ste">
                {iconSte}
                <span>{label}</span>
                {nbTsk !== undefined && <span>({nbTsk})</span>}
            </div>
            <div className="right__ste">
                <div className="icn__add">{iconAdd}</div>
                <div className="icn__ellip">{iconEllip}</div>
            </div>
        </div>
    );
};

