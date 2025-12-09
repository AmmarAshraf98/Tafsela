import { getAllItems, getSpecificProduct } from "@/services/dataServece";
import UpdateForm from "../../_Dash_component/UpdateForm";

// generate static params to convert this page from dynamic into (SSG) static
export async function generateStaticParams() {
  const products = await getAllItems();
  const ids = products.map((product) => ({ id: String(product.id) }));
  return ids;
}

async function page({ params }: { params: { id: string } }) {
  const { id } = await params;
  const product = await getSpecificProduct(id);

  if (!product) {
    return <div className='bg-primary-600'>Product not found</div>;
  }

  return (
    <div className=''>
      <UpdateForm product={product} />
    </div>
  );
}

export default page;
