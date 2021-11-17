import { useState } from "react";
import { useShow } from "../state/ShowsProvider";
import RowCard from "./RowCard";
import { useHistory } from "react-router";
import { MdClose } from "react-icons/md";
export default function Search() {
  const { shows } = useShow();
  const history = useHistory();
  const [searchTerm, setSearchTerm] = useState("");
  function onSearch(event) {
    history.push("/search");
    setSearchTerm(event.target.value);
  }
  function onCancel(event) {
    event.preventDefault();
    history.push("/");
    setSearchTerm("");
  }
  const filtered = shows
    .filter((item) => {
      if (searchTerm == "") {
        return item;
      } else if (item.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        return item;
      }
    })
    .map((item) => <RowCard show={item} />);
  return (
    <div className="search_wrapper">
      <input type="text" placeholder="search..." onChange={onSearch} />
      <MdClose className="cancel" onClick={(event) => onCancel(event)} />
      <div className="result">{searchTerm !== "" && filtered}</div>
    </div>
  );
}
