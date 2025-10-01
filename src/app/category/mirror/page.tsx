import { supabase } from "@/services/supaBase";
import { Metadata } from "next";
import React from "react";
import { product } from "../../../lib/types/product_i";
import { supaBaseError } from "@/lib/types/supabaseError";

export const metadata: Metadata = {
  title: " Bride Mirror",
};

async function page() {
  // console.log(product);

  const { data, error } = (await supabase.from("items").select("*")) as {
    data: product[] | null;
    error: supaBaseError;
  };

  if (error) {
    console.error("Error fetching data:", error.message);
  }

  console.log(data);

  return <div>Bride Mirror | page</div>;
}

export default page;
