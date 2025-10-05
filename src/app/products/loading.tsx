import Spinner from "@/_Components/Spinner";
import React from "react";

function loading() {
  return (
    <div className='grid items-center justify-center'>
      <Spinner />
      <p className='text-xl text-primary-200'>Loading products ...</p>
    </div>
  );
}

export default loading;
