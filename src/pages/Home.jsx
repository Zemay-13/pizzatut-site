import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCategory, setFilters } from "../redux/slices/filterSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import qs from "qs";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaList from "../components/PizzaList";
import listMenu from "../data/listMenu";
import { useRef } from "react";

const Home = () => {
  const { сategory, sort, search, page } = useSelector((state) => state.filter);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isSearch = useRef(false);
  const isMounted = useRef(false);

  const [pizzaList, setPizzaList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const category = сategory > 0 ? `category=${сategory}` : "";
    const searchValue = search ? `&search=${search}` : "";
    axios
      .get(
        `https://6487620abeba629727908b8d.mockapi.io/items?page=${page}&limit=8&${category}&sortBy=${sort.sortProperty}&order=desc${searchValue}`
      )
      .then((res) => {
        setPizzaList(res.data);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [сategory, sort.sortProperty, page]);

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      const sort = listMenu.find(
        (obj) => obj.sortProperty === params.sortProperty
      );
      dispatch(
        setFilters({
          ...params,
          sort,
        })
      );
    }
    isSearch.current = true;
  }, []);

  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortProperty: sort.sortProperty,
        сategory,
        page,
      });

      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [сategory, sort.sortProperty, page]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <PizzaList pizzaList={pizzaList} isLoading={isLoading} />
    </div>
  );
};

export default Home;
