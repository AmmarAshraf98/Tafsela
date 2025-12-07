function Tooltip({
  message,
  direction,
}: {
  message: string;
  direction: string;
}) {
  return (
    <span
      className={`absolute whitespace-nowrap 
                   rounded-md bg-primary-700 px-2 py-1 text-xs text-white opacity-0
                   group-hover:opacity-100 transition-opacity ${
                     direction
                       ? direction
                       : "left-1/2 top-full mt-1 -translate-x-1/2 "
                   }`}
    >
      {message}
    </span>
  );
}

export default Tooltip;
