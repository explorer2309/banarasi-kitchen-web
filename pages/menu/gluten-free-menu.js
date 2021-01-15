import { getMenu, renderMenu } from "../../components/menu-helper";

export default function FullMenu({ menu }) {
  return renderMenu({ menu, title: "Gluten-Free Menu" });
}

export async function getStaticProps() {
  const fullMenu = await getMenu();
  const menu = {};

  Object.keys(fullMenu).forEach((section) => {
    const items = fullMenu[section].filter((item) => item.isGlutenFree);
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
