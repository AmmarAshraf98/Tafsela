// export const maxLength = (desc: string, start: number = 0, end: number = 8) => {
//   const req = desc.split(" ").slice(start, end).join(" ");
//   return req + (desc.split(" ").length > 8 ? "..." : "");
// };

// make it dynmaic to show full description based on a flag
export const maxLength = (
  desc: string,
  start: number = 0,
  end: number = 8,
  showFull: boolean = false
) => {
  if (showFull) return desc;
  const words = desc.split(" ");
  const req = words.slice(start, end).join(" ");
  return req + (words.length > end ? "..." : "");
};
