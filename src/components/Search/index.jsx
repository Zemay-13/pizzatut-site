import { useSelector, useDispatch } from "react-redux";
import { setSearch } from "../../redux/slices/filterSlice";
import { useRef } from "react";

import styles from "./Search.module.scss";
import searchIcon from "../../assets/img/search.svg";
import clearIcon from "../../assets/img/clearIcon.svg";

const Search = () => {
  const dispatch = useDispatch();
  const { search } = useSelector((state) => state.filter);
  const inputRef = useRef();

  const onClickClear = () => {
    dispatch(setSearch(""));
    inputRef.current.focus();
  };

  return (
    <div className={styles.container}>
      <img src={searchIcon} alt="" className={styles.searchIcon} />
      <input
        ref={inputRef}
        value={search}
        onChange={(event) => {
          dispatch(setSearch(event.target.value));
        }}
        placeholder="Поиск пиццы..."
        className={styles.input}
      />
      {search && (
        <img
          onClick={() => onClickClear()}
          className={styles.clearIcon}
          src={clearIcon}
          alt=""
        />
      )}
    </div>
  );
};

export default Search;
