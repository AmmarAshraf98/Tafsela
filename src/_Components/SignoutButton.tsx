import { signOutAction } from "@/lib/actions";
import { TbLogout } from "react-icons/tb";

function SignOutButton() {
  return (
    <form action={signOutAction} className=''>
      <button
        className='capitalize bg-primary-10 flex-shrink-0 
 max-w-full
  text-primary-200 cursor-pointer 
  px-3 py-2.5 transition-all duration-300 
  hover:text-primary-400 hover:bg-primary-800/80  flex items-start gap-2 w-full 
  '
      >
        {/* <ArrowRight /> */}
        <TbLogout className='h-5 w-5 text-primary-600' />

        <span className='hidden md:inline-block'>Sign out</span>
      </button>
    </form>
  );
}

export default SignOutButton;
