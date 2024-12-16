import { useId } from "react";
import s from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const contactId = useId();
  const dispatch = useDispatch();
  const value = useSelector((state) => state.filters.name);
  const handleSearch = (e) =>
    dispatch(changeFilter(e.target.value.trim().toLowerCase()));

  return (
    <div className="s.wrapper">
      <label htmlFor={contactId} className={s.text}>
        Find contacts by name
      </label>
      <input
        className={s.input}
        type="text"
        value={value}
        id={contactId}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBox;
