import { useState } from "react";
import {IoMdArrowDropdown, IoMdArrowDropup} from 'react-icons/io'

export default function Dropdown({ state, show }) {
  const [open, setOpen] = useState(false);
  const [isSelected,setIsSelected] = state
  const toggle = () => setOpen(!open);

  const seasons = Object.keys(show.seasons).sort((a, b) => a - b);

  const season = seasons.map((season, index) => (
    <li className="dd-list-item" key={index}>
      <button type="button" onClick={() => handleOnClick(season)}>
        <span>{season}</span>
      </button>
    </li>
  ));

  function handleOnClick(item) {
    setIsSelected(item);
    setOpen(!open);
  }

  return (
    <div className="dd-wrapper">
      <div
        tabIndex={0}
        className="dd-header"
        role="button"
        onKeyPress={() => toggle(!open)}
        onClick={() => toggle(!open)}
      >
        <div className="dd-header_title">
          <p className="dd-header_title-bold">{isSelected}</p>
        </div>
        <div className="dd-header_action">
          <p>{open ? <IoMdArrowDropup/> : <IoMdArrowDropdown/>}</p>
        </div>
      </div>
      {open && <ul className="dd-list">{season}</ul>}
    </div>
  );
}
