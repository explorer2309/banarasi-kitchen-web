import { getMenu } from "./helpers/menu-helper";

export default function FormattedMenuJson({ menu }) {
  return <pre>{JSON.stringify(menu, null, 2)}</pre>;
}

export async function getStaticProps() {
  const menu = await getMenu();
  return {
    props: {
      menu,
    },
  };
}
