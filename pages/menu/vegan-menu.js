import { getMenu, renderMenu } from "../../components/menu-helper";

export default function FullMenu({ menu }) {
  return renderMenu({ menu, title: "Vegan Menu" });
}

export async function getStaticProps() {
  const fullMenu = await getMenu();
  const menu = {};

  Object.keys(fullMenu).forEach((section) => {
    const items = fullMenu[section].filter((item) => item.isVegan);
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
