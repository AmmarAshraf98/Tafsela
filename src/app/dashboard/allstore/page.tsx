import React, { Suspense } from "react";
import ItemsTable from "../_Dash_component/ItemsTable";
import Spinner from "@/_Components/Spinner";

function page() {
  return (
    <section>
      <h1 className='text-lg md:text-2xl mb-4 pb-2 md:md-8 border-b border-primary-700'>
        All Items in store
      </h1>
      <Suspense fallback={<Spinner />}>
        <ItemsTable />
      </Suspense>
    </section>
  );
}

export default page;
