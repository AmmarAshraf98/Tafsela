import { getSpecificProduct } from "@/services/dataServece";
import UpdateForm from "../../_Dash_component/UpdateForm";

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
