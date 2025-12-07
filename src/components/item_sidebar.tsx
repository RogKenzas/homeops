import type { ReactNode } from "react";

interface ItemSidebarProps {
    icon: ReactNode;
    label: ReactNode;
}

function ItemSidebar({ icon, label }: ItemSidebarProps) {
    return (
        <div style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}>
            {icon}
            {label}
        </div>
    );
}


export default ItemSidebar;