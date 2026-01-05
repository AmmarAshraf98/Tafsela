// no need to be controlled element here cause formData will capture the value
function BestCheckBox({ defaultValue }: { defaultValue?: boolean }) {
  return (
    <div className='flex items-center border border-primary-700 rounded-sm ps-2'>
      <input
        id='best_seller'
        type='checkbox'
        name='best_seller'
        className='w-3 h-3 text-primary-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-primary-800 focus:ring-2 dark:bg-primary-700 checked:accent-primary-700'
        defaultChecked={defaultValue}
      />
      <label
        htmlFor='best_seller'
        className='w-full p-2.5 ms-2 text-sm font-medium text-primary-600 dark:text-primary-300'
      >
        best_seller
      </label>
    </div>
  );
}

export default BestCheckBox;
