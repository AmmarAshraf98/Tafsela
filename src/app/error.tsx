"use client";

// the error message will come from the throw new error that handled in file that call api
export default function Error({
  error,
  reset,
}: {
  error: { message: string };
  reset: () => void;
}) {
  console.log(reset);

  return (
    <main className='flex justify-center items-center flex-col gap-6'>
      <h1 className='text-3xl font-semibold'>Something went wrong!</h1>
      <p className='text-lg'>{error.message}</p>

      <button
        className='inline-block bg-primary-500 text-primary-800 px-6 py-3 text-lg'
        onClick={reset}
      >
        Try again
      </button>
    </main>
  );
}
