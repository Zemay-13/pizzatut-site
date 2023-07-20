import categoriesList from "../data/categoriesList";
import { useSelector, useDispatch } from "react-redux";
import { setCategory } from "../redux/slices/filterSlice";

const Categories = () => {
  const сategory = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const onChangeCategory = (id) => {
    dispatch(setCategory(id));
  };
  return (
    <div className="categories">
      <ul>
        {categoriesList.map((categoryName, i) => (
          <li
            key={i}
            onClick={() => onChangeCategory(i)}
            className={сategory === i ? "active" : ""}
          >
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
