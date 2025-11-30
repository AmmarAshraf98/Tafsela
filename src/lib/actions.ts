"use server";

import { supabase } from "@/services/supaBase";
import { auth, signIn, signOut } from "./auth";
import { checkAdmin } from "./helper/checkISAdmin";
import { revalidatePath } from "next/cache";

// Action to handle user sign-in with Google
export async function signInAction() {
  await signIn("google", {
    redirectTo: "/dashboard",
  });
}

// ACTION TO HANDLE USER SIGN-OUT
export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}

// -------------------------------  CRUD OPERATION FOR PRODUCTS [ DASHBOARD]  ---------------------------------
// Action to handle adding a new product
export async function addProductAction(formData: FormData) {
  // basic fields
  const name = formData.get("name") as string;
  const price = Number(formData.get("price"));
  const on_sale = formData.get("on_sale") === "on";
  const priceAfterSale = Number(formData.get("priceAfterSale"));
  const category = Number(formData.get("category"));
  const main_img = formData.get("main_img") as string;
  const description = formData.get("description") as string;

  // dynamic images: img_1, img_2, img_3...
  const dynamicImages: Record<string, string> = {};

  formData.forEach((value, key) => {
    if (key.startsWith("img_")) {
      dynamicImages[key] = value as string;
    }
  });

  const product = {
    name,
    price,
    on_sale,
    priceAfterSale,
    category,
    main_img,
    ...dynamicImages,
    description,
  };

  const { error } = await supabase.from("items").insert(product).single();

  if (error) throw new Error("Failed to add product", error);
  console.log("error message if can not adding product", error || error);

  // display success status to the client
  // ...
}

// action to handle delete product
export async function deleteProductAction(productId: number) {
  const session = await auth();

  if (!session) {
    return { ok: false, error: "You must be signed in to delete a product" };
  }

  if (!session.user?.email || !checkAdmin(session.user.email)) {
    return {
      ok: false,
      error: "You are not authorized to delete this product",
    };
  }

  const { error } = await supabase.from("items").delete().eq("id", productId);

  if (error) {
    // return { ok: false, error: "Failed to delete product" };
    throw new Error("Failed to delete product", error);
  }

  // update data after delete product
  revalidatePath("/dashboard/allstore");

  // display success status to the client
  // ...
  // return { ok: true };
}

// Action to handle updating a prodcut by Id
export async function updateProductAction() {
  console.log("updating...");
}

// ----------------------------------- END OF CRUD OPERATION FOR PRODUCTS ------------------------------------
/*
// past of delete function
Action to handle deleting a product by ID
export async function deleteProductAction(productId: number) {
  const session = await auth();
  console.log(session);

  if (!session) throw new Error("You must be signed in to delete a product");
  if (!session.user?.email || !checkAdmin(session.user.email))
    throw new Error("You are not authorized to delete this product");

  const { error } = await supabase.from("items").delete().eq("id", productId);
  if (error) throw new Error("Failed to delete product", error);

  // update data after delete product
  revalidatePath("/dashboard/allstore");
}
*/
