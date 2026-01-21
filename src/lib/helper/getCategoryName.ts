export const getCategoryName = (id: number) => {
  let name;
  switch (id) {
    case 1:
      name = " dresses";
      break;

    case 2:
      name = "bridal touches";
      break;

    case 3:
      name = "Hand embroidery";
      break;

    case 4:
      name = "bride set";
      break;

    case 5:
      name = "resin";
      break;

    case 6:
      name = "bouquets";
      break;

    case 7:
      name = "giveaways";
      break;
  }

  return name;
};
