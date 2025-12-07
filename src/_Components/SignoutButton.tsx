"use client";
import { signOutAction } from "@/lib/actions";
import { useFormStatus } from "react-dom";
import { TbLogout } from "react-icons/tb";
import MiniSpiner from "./MiniSpiner";

function SignOutButton({ text }: { text?: string }) {
  return (
    <form action={signOutAction} className=''>
      <Button text={text} />
    </form>
  );
}

function Button({ text }: { text?: string }) {
  const { pending } = useFormStatus();
  return (
    <button
      className='capitalize bg-primary-10 flex-shrink-0 
 max-w-full
  text-primary-200 cursor-pointer 
  px-3 py-2.5 transition-all duration-300 
  hover:text-primary-400 hover:bg-primary-800/80  flex items-start gap-2 w-full 
  '
    >
      {pending ? (
        <span className='flex items-center justify-center'>
          <MiniSpiner />
        </span>
      ) : (
        <>
          <TbLogout className='h-5 w-5 text-primary-600' />

          {text && <span className='hidden md:inline-block'>{text}</span>}
        </>
      )}
    </button>
  );
  return;
}

export default SignOutButton;
