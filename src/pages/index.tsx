import Banner from "@/components/Banner";
import Product from "@/components/Product";
import { setAllProducts } from "@/store/nextSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ProductProps } from "../../type";

interface Props {
  productData: ProductProps;
}
export default function Home({ productData }: Props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setAllProducts({ allProducts: productData }));
  }, [productData]);
  return (
    <main>
      <div className="max-w-screen-2xl mx-auto">
        <Banner />
        <div className="relative md:-mt020 lgl:-mt-32 xl:-mt-60 z-20 mb-10">
          <Product productData={productData} />
        </div>
      </div>
    </main>
  );
}

// SSR for data fetching
export const getServerSideProps = async () => {
  const res = await fetch("https://fakestoreapiserver.reactbd.com/tech");
  const productData = await res.json();
  return { props: { productData } };
};
