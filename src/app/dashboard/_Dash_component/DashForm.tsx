import React from "react";
import SelectComponent from "./SelectComponent";
import CheckBoxCom from "./CheckBoxCom";

function DashForm() {
  return (
    <section className=''>
      <div className='py-8 px-4 mx-auto max-w-2xl lg:py-16'>
        <h2 className='mb-4 text-xl font-bold text-primary-600 dark:text-primary-300'>
          Add a new product
        </h2>
        <form action='#'>
          <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
            {/* name */}
            <div className='sm:col-span-2'>
              <label
                htmlFor='name'
                className='block mb-2 text-sm font-medium text-primary-600 dark:text-primary-300'
              >
                Name
              </label>
              <input
                type='text'
                name='name'
                id='name'
                className='bg-primary-900 border border-primary-700 text-primary-600 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-700 block w-full p-2.5 dark:bg-primary-900 dark:border-primary-900 dark:placeholder-primary-400 dark:text-primary-300 dark:focus:ring-primary-700 dark:focus:border-primary-700 ring-0'
                placeholder='Type product name'
                required
              />
            </div>

            {/* price */}
            <div className='w-full'>
              <label
                htmlFor='price'
                className='block mb-2 text-sm font-medium text-primary-600 dark:text-primary-300'
              >
                Price
              </label>
              <input
                type='number'
                name='price'
                id='price'
                className='bg-primary-900 border border-primary-700 text-primary-600 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-primary-900 dark:border-primary-900 dark:placeholder-primary-400 dark:text-primary-300 dark:focus:ring-primary-700 dark:focus:border-primary-700'
                placeholder='E£2999'
                required
              />
            </div>

            {/* get Discount */}
            <div className='w-full'>
              <label
                htmlFor='on_sale'
                className='block mb-2 text-sm font-medium text-primary-600 dark:text-primary-300'
              >
                Sale
              </label>
              <CheckBoxCom />
            </div>

            {/* Price After Discount*/}
            <div className='w-full'>
              <label
                htmlFor='price'
                className='block mb-2 text-sm font-medium text-primary-600 dark:text-primary-300'
              >
                Price After Discount
              </label>
              <input
                type='number'
                name='price'
                id='price'
                className='bg-primary-900 border border-primary-700 text-primary-600 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-primary-900 dark:border-primary-900 dark:placeholder-primary-400 dark:text-primary-300 dark:focus:ring-primary-700 dark:focus:border-primary-700'
                placeholder='E£2999'
                required
              />
            </div>

            {/* category */}
            <div>
              <label
                htmlFor='category'
                className='block mb-2 text-sm font-medium text-primary-600 dark:text-primary-300'
              >
                Category
              </label>
              {/* <select
                id='category'
                className='bg-primary-900 border border-primary-700 text-primary-600 text-sm rounded-lg focus:ring-primary-700 focus:border-primary-500 block w-full p-2.5 dark:bg-primary-900 dark:border-primary-900 dark:placeholder-primary-400 dark:text-primary-300 dark:focus:ring-primary-700 dark:focus:border-primary-700'
              >
                <option
                  className='bg-primary-900 text-primary-50'
                  selected={true}
                >
                  Select category
                </option>
                <option value={1}>dresses</option>
                <option value={2}>bride mirror</option>
                <option value={3}>wedding contract</option>
                <option value={4}>ring trays</option>
                <option value={5}>resin</option>
                <option value={6}>hand fan</option>
              </select> */}
              <SelectComponent />
            </div>

            {/*  Main Image*/}
            <div className='w-full'>
              <label
                htmlFor='Image'
                className='block mb-2 text-sm font-medium text-primary-600 dark:text-primary-300'
              >
                Image
              </label>
              <input
                type='text'
                name='Image'
                id='Image'
                className='bg-primary-900 border border-primary-700 text-primary-600 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-primary-900 dark:border-primary-900 dark:placeholder-primary-400 dark:text-primary-300 dark:focus:ring-primary-700 dark:focus:border-primary-700'
                placeholder='Product brand'
                required
              />
            </div>

            {/* secon image  */}
            <div>
              <label
                htmlFor='item-weight'
                className='block mb-2 text-sm font-medium text-primary-600 dark:text-primary-300'
              >
                Item Weight (kg)
              </label>
              <input
                type='number'
                name='item-weight'
                id='item-weight'
                className='bg-primary-900 border border-primary-700 text-primary-600 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-primary-900 dark:border-primary-900 dark:placeholder-primary-400 dark:text-primary-300 dark:focus:ring-primary-700 dark:focus:border-primary-700'
                placeholder='12'
                required
              />
            </div>

            <div className='sm:col-span-2'>
              <label
                htmlFor='description'
                className='block mb-2 text-sm font-medium text-primary-600 dark:text-primary-300'
              >
                Description
              </label>
              <textarea
                id='description'
                rows={8}
                className='block p-2.5 w-full text-sm text-primary-600 bg-primary-900 rounded-lg border border-primary-700 focus:ring-primary-700 focus:border-primary-500 dark:bg-primary-900 dark:border-primary-900 dark:placeholder-primary-400 dark:text-primary-300 dark:focus:ring-primary-700 dark:focus:border-primary-700'
                placeholder='Your description here'
              ></textarea>
            </div>
          </div>
          <button
            type='submit'
            className='inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-primary-300 bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-600'
          >
            Add product
          </button>
        </form>
      </div>
    </section>
  );
}

export default DashForm;
