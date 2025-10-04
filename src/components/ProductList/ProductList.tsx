import { useEffect } from "react";
import { ProductCard } from "../Index";
import styles from "./ProductList.module.scss";
import { fetchProducts } from "../../reducers/productSlice";
import { useTypedDispatch, useTypedSelector } from "../../hooks/redux";

export default function ProductList() {
  const isLoading = useTypedSelector((state) => state.products.isLoading);
  const products = useTypedSelector((state) => state.products.products);
  const error = useTypedSelector((state) => state.products.error);

  const dispatch = useTypedDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Catalog</h1>
      <div className={styles.grid}>
        {error && <h1>{error}</h1>}
        {isLoading
          ? Array.from({ length: 30 }).map((_, i) => (
              <ProductCard key={i} isLoading={true} />
            ))
          : products.map((product) => {
              const [name, weight] = product.name.split("-");
              const productWithWeight = {
                ...product,
                name: name.trim(),
                weight: weight?.trim(),
              };

              return (
                <ProductCard
                  key={product.id}
                  product={productWithWeight}
                  isLoading={false}
                />
              );
            })}
      </div>
    </div>
  );
}
