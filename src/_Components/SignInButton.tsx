"use client";
import { signInAction } from "@/lib/actions";
import Image from "next/image";
import { useFormStatus } from "react-dom";
import MiniSpiner from "./MiniSpiner";

function SignInButton() {
  return (
    <form action={signInAction}>
      <Button />
    </form>
  );
}

function Button() {
  const { pending } = useFormStatus();
  return (
    <button
      className='flex items-center gap-6 text-lg border border-primary-300 px-6 py-3 md:px-10 md:py-4 font-medium cursor-pointer'
      type='submit'
      disabled={pending}
    >
      {pending ? (
        <div className='flex  items-center gap-2 sm:gap-3'>
          <span className=''> Pleas wait </span>
          <MiniSpiner />
        </div>
      ) : (
        <>
          <Image
            src='https://authjs.dev/img/providers/google.svg'
            alt='Google logo'
            height='24'
            width='24'
          />
          <span className=''>Continue with Google</span>
        </>
      )}
    </button>
  );
}

export default SignInButton;
