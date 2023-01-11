import React, { useState, useEffect } from "react";
import "./Search.css"
import { AudioOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";

const { Search } = Input;

function SearchBar() {
  const [searchValue, setSearchValue] = useState("");
   const handleSearch = (e) => {
     e.preventDefault();
     window.open(`https://www.baidu.com/s?wd=${searchValue}`);
   };

   return (
     <form>
       <input
         type="text"
         value={searchValue}
         onChange={(e) => setSearchValue(e.target.value)}
         placeholder="请输入搜索关键字"
       />
       <button type="submit" onClick={handleSearch}>
         搜索
       </button>
     </form>
   );


}
export default SearchBar;
