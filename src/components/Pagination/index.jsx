import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss";
import { useDispatch } from "react-redux";
import { setPage } from "../../redux/slices/filterSlice";
const Pagination = () => {
  const dispatch = useDispatch();
  const onChangePage = (number) => dispatch(setPage(number));
  return (
    <ReactPaginate
      className={styles.container}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(event) => onChangePage(event.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={2}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
