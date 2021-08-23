function ResetAll() {
  return (
    <>
      <div className='max-w-xl mx-auto text-center'>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <button className='px-5 w-1/2 py-2.5 font-medium text-red-400 text-sm transition duration-300 ease-in-out rounded-lg bg-red-50 hover:text-red-700 hover:bg-red-100'>
            Reset
          </button>
          <p className='text-sm text-gray-600 mt-2.5 tracking-wide'>
            This action cannot be undone
          </p>
        </form>
      </div>
    </>
  );
}

export default ResetAll;
