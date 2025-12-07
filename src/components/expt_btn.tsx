import "../Style/expt_btn.css"

interface ExptBtnProps {
  onClick?: () => void;
  icon?: React.ReactNode;
  label?: string;
}

export const ExptBtn: React.FC<ExptBtnProps> = ({ onClick, icon, label }) => {

  return (
    <div className="expt__btn" onClick={onClick}>
      {icon}
      <p>{label}</p>
    </div>
  );
};
