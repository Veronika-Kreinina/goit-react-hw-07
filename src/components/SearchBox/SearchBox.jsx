import { useId } from "react";
import s from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { filterContacts } from "../../redux/filtersSlice";

const SearchBox = () => {
  const contactId = useId();
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.name);
  const handleSearch = (filter) => dispatch(filterContacts(filter));

  return (
    <div className="s.wrapper">
      <label htmlFor={contactId} className={s.text}>
        Find contacts by name
      </label>
      <input
        className={s.input}
        type="text"
        value={filter}
        id={contactId}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
