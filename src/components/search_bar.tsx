import "../Style/search_bar.css";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { MdKeyboardReturn } from "react-icons/md";

interface SearchBarProps {
  isCtnDashVisible: boolean;
}

export const SearchBar: React.FC<SearchBarProps> = ({ isCtnDashVisible }) => {
  return (
    <div className={`search__bar ${!isCtnDashVisible ? 'search__bar--expanded' : ''}`}>
      <div className={`ctn__bar ${!isCtnDashVisible ? 'ctn__bar--expanded' : ''}`}>
        <div className="icn_search">
          <HiMagnifyingGlass size={20} color="#aaaaaa" />
        </div>
        <input
          type="text"
          name="search_bar"
          id="bar__search"
          placeholder="Search Here"
          className={!isCtnDashVisible ? 'bar__search--expanded' : ''}
        />
        <div className="icn__submit">
            <MdKeyboardReturn/>
        </div>
      </div>
    </div>
  );
};
