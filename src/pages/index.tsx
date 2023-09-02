import Banner from "@/components/Banner";
import Product from "@/components/Product";
import { ProductProps } from "../../type";

interface Props {
  productData: ProductProps;
}
export default function Home({ productData }: Props) {
  console.log(productData);

  return (
    <main>
      <div className="max-w-screen-2xl mx-auto">
        <Banner />
        <Product />
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
