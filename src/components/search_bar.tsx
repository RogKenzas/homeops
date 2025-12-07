import "../Style/search_bar.css";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { MdKeyboardReturn } from "react-icons/md";

export const SearchBar: React.FC = () => {
  return (
    <div className="search__bar">
      <div className="ctn__bar">
        <div className="icn_search">
          <HiMagnifyingGlass size={20} color="#aaaaaa" />
        </div>
        <input
          type="text"
          name="search_bar"
          id="bar__search"
          placeholder="Search Here"
        />
        <div className="icn__submit">
            <MdKeyboardReturn/>
        </div>
      </div>
    </div>
  );
};
