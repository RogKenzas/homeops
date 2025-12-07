import type { ReactNode } from "react";

interface BtnSideProps {
    icon: ReactNode;
}

function BtnSide({ icon }: BtnSideProps) {
    return (
        <>
            {icon}
        </>
    );
}

export default BtnSide;
