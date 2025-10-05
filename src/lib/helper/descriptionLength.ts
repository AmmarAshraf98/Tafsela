export const maxLength = (desc: string) => {
  const req = desc.split(" ").slice(0, 8).join(" ");
  return req + (desc.split(" ").length > 8 ? "..." : "");
};
