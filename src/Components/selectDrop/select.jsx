import React, { useState } from "react";
import "../selectDrop/select.css";
import { ClickAwayListener } from "@mui/material";
import { FilterList } from "@mui/icons-material";


function select({data, placeholder, icon}) {
  const [isOpenSelect, setIsOpenSelect] = useState(false);
  const [selectedIndex, setselectedIndex] = useState(0);
  const [selectedItem, setselectedItem] = useState(placeholder);

  const [listData, setListData] = useState(data);
  const [listData2, setListData2] = useState(data);

  const openSelect = () => {
    setIsOpenSelect(!isOpenSelect);
  };
  const closeSelect = (index, name) => {
    setselectedIndex(index);
    setIsOpenSelect(false);
    setselectedItem(name);
  };

  const filterList = (e) => {
    const keyword=e.target.value.toLowerCase();

    const list=listData2.filter((item)=>{
        return item.toLowerCase().includes(keyword);
    })

    const list2= list.filter((item, index)=>list.indexOf(item)===index);
    setListData(list2)
  }

  return (
    <>
      <ClickAwayListener onClickAway={() => setIsOpenSelect(false)}>
        <div className="selectDropWrapper cursor position-relative">
          {icon}
          <span className="openSelect" onClick={openSelect}>
            {selectedItem.length>14 ? selectedItem.substr(0,14)+"..." : selectedItem} <i class="bi bi-caret-down-fill"></i>
          </span>
          {isOpenSelect === true && (
            <div className="selectDrop">
              <div className="searchField">
                <input type="text" placeholder="search here..." onChange={filterList} />
              </div>
              <ul className="searchResult">

              <li key={0} onClick={() => closeSelect(0, placeholder)} className={`${selectedIndex === 0 ? "active" : ""}`}>
                  {placeholder}</li>
                {
                    listData.map((item, index)=>{
                        return(
                            <li key={index+1} onClick={() => closeSelect(index, item)}
                  className={`${selectedIndex === index+1 ? "active" : ""}`}>
                  {item}</li>
                        )
                    })
                }
              </ul>
            </div>
          )}
        </div>
      </ClickAwayListener>
    </>
  );
}

export default select;
