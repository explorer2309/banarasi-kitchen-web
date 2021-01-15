import { getMenu, renderMenu } from "../../components/menu-helper";
import { style } from "../../styles/menu.module.css";

export default function FullMenu({ menu }) {
  return renderMenu({ menu, title: "Vegetarian Menu" });
}

export async function getStaticProps() {
  const fullMenu = await getMenu();
  const menu = {};

  Object.keys(fullMenu).forEach((section) => {
    const items = fullMenu[section].filter((item) => item.isVegetarian);
    if (items.length) {
      menu[section] = items;
    }
  });

  return {
    props: {
      menu: menu,
    },
  };
}
