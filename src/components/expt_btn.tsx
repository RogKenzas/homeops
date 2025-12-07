import { FiDownloadCloud } from "react-icons/fi";
import "../Style/expt_btn.css"

export const ExptBtn: React.FC = () => {
  return (
    <div className="expt__btn">
        <FiDownloadCloud />
      <p>Export</p>
    </div>
  );
};
