// no need to be controlled element here cause formData will capture the value
function CheckBoxCom({ defaultValue }: { defaultValue?: boolean }) {
  return (
    <div className='flex items-center border border-primary-700 rounded-sm ps-2'>
      <input
        id='sale'
        type='checkbox'
        name='on_sale'
        className='w-3 h-3 text-primary-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-primary-800 focus:ring-2 dark:bg-primary-700 checked:accent-primary-700'
        defaultChecked={defaultValue}
      />
      <label
        htmlFor='sale'
        className='w-full p-2.5 ms-2 text-sm font-medium text-primary-600 dark:text-primary-300'
      >
        get discount
      </label>
    </div>
  );
}

export default CheckBoxCom;
