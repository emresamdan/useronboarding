import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";
import Navbar from "../../components/Navbar";
import Link from "next/link";
import Footer from "../../components/Footer";
import Airtable from "airtable";
import AirtableTable from "../../components/AirtableTable";
const base = new Airtable({ apiKey: "keyh1SR0BR1T5dF2N" }).base(
  "appCMLmv9QyVhmQwH"
);

export default function Products({}) {
  const router = useRouter();

  return (
    <div>
      <Navbar />
      Asd
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const result = await base("No-Code Tools")
    .select({
      // Selecting the first 3 records in Grid view:
      maxRecords: 10,
      view: "Grid view",
    })
    .all();

  const products = result.map((product) => {
    return {
      product: product.get("Product"),
      description: product.get("Description"),
      link: product.get("Producthunt Link"),
      category: product.get("Categories"),
      images: product.get("Image").map((e) => e.url),
      id: product.id,
    };
  });
  return {
    props: {
      nocodetools: products,
    }, // will be passed to the page component as props
  };
}

export async function getStaticPaths() {
  const result = await base("No-Code Tools")
    .select({
      // Selecting the first 3 records in Grid view:
      maxRecords: 10,
      view: "Grid view",
    })
    .all();

  const products = result.map((product) => {
    return {
      product: product.get("Product"),
    };
  });
  console.log(products);
  return {
    paths: [
      {
        params: { slug: "hunter" },
      },
    ],
    fallback: false,
  };
}
