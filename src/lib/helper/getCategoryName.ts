export const getCategoryName = (id: number) => {
  let name;
  switch (id) {
    case 1:
      name = " dresses";
      break;

    case 2:
      name = "bride mirror";
      break;

    case 3:
      name = "wedding contract";
      break;

    case 4:
      name = "ring trays";
      break;

    case 5:
      name = "resin";
      break;

    case 6:
      name = "hand fan";
      break;
  }

  return name;
};
