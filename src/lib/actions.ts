"use server";

import { supabase } from "@/services/supaBase";
import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import { checkAdmin } from "./helper/checkISAdmin";

// Action to handle user sign-in with Google
export async function signInAction() {
  await signIn("google", {
    redirectTo: "/products",
  });
}

// ACTION TO HANDLE USER SIGN-OUT
export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}

// -------------------------------  CRUD OPERATION FOR PRODUCTS [ DASHBOARD]  ---------------------------------
// Action to handle adding a new product
export async function addProductAction(formData: FormData) {
  const session = await auth();

  if (!session) {
    throw new Error("You must be signed in to add a product");
  }

  if (!session.user?.email || !checkAdmin(session.user.email)) {
    throw new Error("You are not authorized to add a product");
  }

  // basic fields
  const name = formData.get("name") as string;
  const price = Number(formData.get("price"));
  const on_sale = formData.get("on_sale") === "on";
  const priceAfterSale = Number(formData.get("priceAfterSale"));
  const category = Number(formData.get("category"));
  const main_img = formData.get("main_img") as string;
  const description = formData.get("description") as string;
  const best_seller = formData.get("best_seller") === "on";
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
    best_seller,
  };

  const { error } = await supabase.from("items").insert(product).single();

  if (error) throw new Error("Failed to add product");

  // refresh the allstore dashboard so newly added items appear immediately
  revalidatePath("/dashboard/allstore");
  revalidatePath("/products");
  revalidatePath("/dashboard/add");
  // display success status to the client
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
}

// Action to handle updating a prodcut by Id
export async function updateProductAction(formData: FormData) {
  // authenticate user
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

  // basic fields
  const name = formData.get("name") as string;
  const price = Number(formData.get("price"));
  const on_sale = formData.get("on_sale") === "on";
  const priceAfterSale = Number(formData.get("priceAfterSale"));
  const category = Number(formData.get("category"));
  const main_img = formData.get("main_img") as string;
  const description = formData.get("description") as string;
  const id = Number(formData.get("id"));

  // dynamic images: img_1, img_2, img_3...
  const dynamicImages: Record<string, string> = {};

  // collect dynamic images from formData into dynamicImages object
  formData.forEach((value, key) => {
    if (key.startsWith("img_")) {
      dynamicImages[key] = value as string;
    }
  });

  const updatedProduct = {
    name,
    price,
    on_sale,
    priceAfterSale,
    category,
    main_img,
    ...dynamicImages,
    description,
  };

  const { error } = await supabase
    .from("items")
    .update(updatedProduct)
    .eq("id", id)
    .select();

  if (error) {
    throw new Error("Failed To update product :(");
  }

  // Revalidate all affected pages after updating
  revalidatePath("/dashboard/allstore");
  revalidatePath("/products");
  revalidatePath("/products/[productId]");

  // navigate to allstore or display success status to the client
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
