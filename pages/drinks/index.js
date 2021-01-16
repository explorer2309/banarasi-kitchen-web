import { getMenu, renderMenu } from "../../components/drinks-menu-helper";

export default function FullMenu({ menu }) {
  return renderMenu({ menu, title: "Drinks Menu" });
}

export async function getStaticProps() {
  const menu = await getMenu();
  return {
    props: {
      menu: menu,
    },
  };
}
