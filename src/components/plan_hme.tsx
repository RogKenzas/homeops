import { BiFolder } from "react-icons/bi";
import "../Style/plan_hme.css";
import { HeaderSec } from "./header_sec";

function PlanHme() {
  return (
    <div className="plan__hme">
      <HeaderSec icon={<BiFolder size={13}/>} />
      <div className="plan__ctn">
        <h1>Planning Page</h1>
      </div>
    </div>
  );
}

export default PlanHme;
