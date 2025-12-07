import { ROUTE_TITLES } from "../routers/routeTitle";
import { useRoute } from "../routers/useRoute";
import { FiHome } from "react-icons/fi";
import "../Style/header_sec.css";
import type { ReactNode } from "react";
import { SearchBar } from "./search_bar";
import { BtnMng } from "./btn_mng";

interface HeaderSecProps {
  icon: ReactNode;
  isCtnDashVisible: boolean;
}

export const HeaderSec: React.FC<HeaderSecProps> = ({ icon, isCtnDashVisible }) => {
  const route = useRoute();

  return (
    <div className="header__sec">
      <div className="route">
        <span className="route__icn">
          <FiHome size={14} />
        </span>
        <span className="route__hme"> Home </span>
        <span className="route__slash">/</span>
        <span className="route__icn">{ icon }</span>
        <span className="route__titles">{ROUTE_TITLES[route]}</span>
      </div>

      <div className="input__sec">
        <SearchBar isCtnDashVisible={isCtnDashVisible} />
      </div>

      <div className="btn__card__sec">
        <BtnMng />
      </div>
    </div>
  );
};
