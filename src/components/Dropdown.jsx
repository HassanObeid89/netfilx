import { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

/**
 * Code quality -1
 * This component is really messy, to the point that is a "hack" to solve the problem instead of a real implementation.
 * During the website review stage, I understood the lack of a real dropdown menu due to the time constrain. That was undestanable.
 * What is not acceptable is that the alternative is a code that is really complex and hard to understand.
 *
 * The solution was:
 * 1. Take a break from the project.
 * 2. In your product backlog (this is why you need one), "create an spike" to learn about the dropdown menu: https://blog.logrocket.com/building-a-custom-dropdown-menu-component-for-react-e94f02ced4a1/
 * 3. Implement it into your project.
 */
export default function Dropdown({ state, show }) {
  const [open, setOpen] = useState(false);
  const [isSelected, setIsSelected] = state;
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
          <p>{open ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}</p>
        </div>
      </div>
      {open && <ul className="dd-list">{season}</ul>}
    </div>
  );
}
