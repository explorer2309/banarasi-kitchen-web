import { getMenu, renderMenu } from "../../components/menu-helper";

export default function FullMenu({ menu }) {
  return renderMenu({ menu, title: "Full Menu" });
}

export async function getStaticProps() {
  const menu = await getMenu();
  return {
    props: {
      menu: menu,
    },
  };
}
