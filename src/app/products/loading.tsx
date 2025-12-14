import Spinner from "@/_Components/Spinner";

function loading() {
  return (
    <div className='grid items-center justify-center h-[400px]'>
      <Spinner />
      <p className='text-xl text-primary-200'>Loading products ...</p>
    </div>
  );
}

export default loading;
