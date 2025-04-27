import React,{FC} from "react";
import { HeaderProps } from "../../types/types";
import SearchBar from "../SearchBar/SearchBar";

const Header: FC<HeaderProps> = ({ onSearch }) => {
  return (
    <header>
      <SearchBar onSearch={onSearch} />
    </header>
  );
}

export default Header;

