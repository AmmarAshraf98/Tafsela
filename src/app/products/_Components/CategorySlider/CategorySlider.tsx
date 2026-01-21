import { SideNavigationLinks } from "@/lib/types/sideNAvigationKinks";
import { FaHandHoldingHeart } from "react-icons/fa6";
import { GiAmpleDress, GiDiamondRing, GiHandheldFan } from "react-icons/gi";
import { ImMagicWand } from "react-icons/im";
import { MdStorefront } from "react-icons/md";
import styles from "./category.module.css";
import CategoryItem from "./CategoryItem";
import { IoGiftSharp } from "react-icons/io5";

const links: SideNavigationLinks[] = [
  {
    id: 1,
    name: "All products",
    href: "/products",
    icon: <MdStorefront />,
  },
  {
    id: 2,
    name: "Hand Embroidery",
    href: "/products/hand-embroidery",
    icon: <FaHandHoldingHeart />,
  },
  {
    id: 3,
    name: "Dresses",
    href: "/products/dresses",
    icon: <GiAmpleDress />,
  },
  {
    id: 4,
    name: "Bride Set",
    href: "/products/bride-set",
    icon: <GiDiamondRing />,
  },
  {
    id: 5,
    icon: <ImMagicWand />,
    name: "Resin",
    href: "/products/resin",
  },
  {
    id: 6,
    name: "Bridal Touches",
    href: "/products/bridal-touches",
    icon: <FaHandHoldingHeart />,
  },
  {
    id: 7,
    name: "Bouquets",
    href: "/products/bouquets",
    icon: <GiHandheldFan />,
  },
  {
    id: 8,
    name: "giveaways",
    href: "/products/giveaways",
    icon: <IoGiftSharp />,
  },
];

function CategorySlider() {
  return (
    <>
      <h2 className='md:text-3xl text-2xl capitalize text-primary-600 font-semibold mb-3'>
        our category
      </h2>

      <ul
        className={`lg:flex-col flex-row flex gap-3 overflow-x-auto ${styles["custom-scrollbar"]}  mb-8 pb-2`}
      >
        {links.map((category) => (
          <CategoryItem category={category} key={category.id} />
        ))}
      </ul>
    </>
  );
}

export default CategorySlider;
