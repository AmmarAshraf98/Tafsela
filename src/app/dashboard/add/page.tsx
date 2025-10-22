import React from "react";
import DashForm from "../_Dash_component/DashForm";

function page() {
  return (
    <div>
      <h1 className='text-meduim md:text-lg border-b border-primary-700 pb-3 md:pb-6'>
        Add new item
      </h1>
      <DashForm />
    </div>
  );
}

export default page;
