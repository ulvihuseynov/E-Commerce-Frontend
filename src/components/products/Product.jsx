import React, { useEffect } from "react";
import ProductCard from "../shared/ProductCard";
import { FaExclamationTriangle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../store/actions";

import Filter from "./Filter";
import useProductFilter from './../../hooks/useProductFilter'
import Loader from "../shared/Loader";
import Paginations from "../shared/Paginations";

const Product = () => {
  const { isLoading, errorMessage } = useSelector((state) => state.errors);
  const { products, categories, pagination } = useSelector(
    (state) => state.products
  );

  const dispatch = useDispatch();
  useProductFilter()
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);
  return (
    <div className="lg:px-14 sm:px-8 px-4 py-14 2xl:w-[90%] 2xl:mx-auto">
      <Filter categories={categories ? categories : []} />
      {isLoading ? (
        <Loader />
      ) : errorMessage ? (
        <div className="flex justify-center items-center h-[200px]">
          <FaExclamationTriangle className="text-slate-800 text-3xl mr-2 " />
          <span className="text-slate-800 font-medium text-lg">
            {errorMessage}
          </span>
        </div>
      ) : (
        <div className="min-h-[700px]">
          <div className="pb-6 pt-14 grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-y-6 gap-x-6 ">
            {products &&
              products.map((product) => (
                <ProductCard key={product.productId} {...product} />
              ))}
          </div>
          <div className="flex justify-center pt-10">
            <Paginations
              numberOfPage={pagination?.totalPage}
              totalProducts={pagination?.totalElements}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
