import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";

import css from "./SearchBox.module.css";

const SearchBox = () => {
  const selectNameFilter = useSelector((state) => state.filters.name);

  const dispatch = useDispatch();

  const handleSearch = (e) => {
    const value = e.target.value;
    const action = changeFilter(value);
    dispatch(action);
  };

  return (
    <>
      <label className={css.label}>
        Fine contacts by name
        <input
          className={css.input}
          type="text"
          name="search"
          value={selectNameFilter}
          onChange={handleSearch}
        />
      </label>
    </>
  );
};

export default SearchBox;