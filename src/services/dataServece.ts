import { category } from "./../lib/types/category";
import { product } from "@/lib/types/product_i";
import { supabase } from "./supaBase";
import { supaBaseError } from "@/lib/types/supabaseError";
import { notFound } from "next/navigation";
// get categories
export const getCategories = async () => {
  const { data, error } = (await supabase.from("categories").select("*")) as {
    data: category[] | null;
    error: supaBaseError;
  };

  if (error) {
    console.log(error.message);
    throw new Error("Failed to load categories");
  }

  return data ?? [];
};

// get all products
export const getAllItems = async (): Promise<product[]> => {
  const { data, error } = (await supabase.from("items").select("*")) as {
    data: product[] | null;
    error: supaBaseError | null;
  };

  if (error) {
    console.error("Error fetching data:", error.message);
    throw new Error("Failed to fetch products");
  }

  return data || [];
};

// get single product by id
export const getSpecificProduct = async (id: string) => {
  const { data, error } = (await supabase
    .from("items")
    .select("*")
    .eq("id", id)
    .single()) as {
    data: product | null;
    error: supaBaseError;
  };

  if (error) {
    console.log(error.message);
    notFound();
    throw new Error("Failed to load the product");
  }

  return data;
};
