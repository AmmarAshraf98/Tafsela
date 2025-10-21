"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

function SelectPrice() {
  // get the page pathName
  const path = usePathname();

  // get the current url
  const currentParams = useSearchParams();

  //handle the routing for programatic navigation without loading
  const router = useRouter();

  const handleChange = (v: string) => {
    //js function to handle url
    const params = new URLSearchParams(currentParams);
    // set the new value
    params.set("price", v);
    //   update the url itself
    router.replace(`${path}?${params.toString()}`, { scroll: false });
  };

  return (
    <Select onValueChange={handleChange}>
      <SelectTrigger className='min-w-[150px] max-w-fit bg-primary-900 border border-primary-600 text-primary-500 focus:outline-none focus:ring-0 focus-visible:ring-0 focus:border-primary-500'>
        <SelectValue placeholder='Select Price Range' />
      </SelectTrigger>

      <SelectContent className='bg-primary-800 text-primary-200 border border-primary-900'>
        <SelectItem
          value='low'
          className='data-[highlighted]:bg-primary-700 data-[highlighted]:text-primary-200 data-[state=checked]:bg-primary-600 data-[state=checked]:text-primary-500 transition-colors duration-200 mb-0.5'
        >
          Budget
        </SelectItem>

        <SelectItem
          value='medium'
          className='data-[highlighted]:bg-primary-700 data-[highlighted]:text-white data-[state=checked]:bg-primary-600 data-[state=checked]:text-primary-300 transition-colors duration-200 mb-0.5'
        >
          Mid-range
        </SelectItem>

        <SelectItem
          value='heigh'
          className='data-[highlighted]:bg-primary-700 data-[highlighted]:text-white data-[state=checked]:bg-primary-600 data-[state=checked]:text-primary-300 transition-colors duration-200'
        >
          Premium
        </SelectItem>
      </SelectContent>
    </Select>
  );
}

export default SelectPrice;
