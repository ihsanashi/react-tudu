function AddNew() {
  return (
    <section className='max-w-xl mx-auto border border-gray-200 rounded-md bg-gray-50'>
      <p className='p-4 text-sm text-gray-600 border-b border-gray-200'>
        Add a new todo item
      </p>
      <form action=''>
        <div className='flex items-center p-2'>
          <label
            htmlFor='title'
            className='w-12 mr-5 text-sm text-right text-gray-700'
          >
            Title
          </label>
          <input
            type='text'
            className='flex-1 p-0 text-base text-gray-900 bg-transparent border-transparent rounded-md focus:border-transparent focus:bg-transparent focus:ring-0'
            placeholder='Eg. Buy groceries'
          />
          <button className='px-5 py-2.5 text-sm font-semibold text-white bg-green-500 hover:bg-green-600 transition duration-300 ease-in-out rounded-md'>
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}

export default AddNew;
