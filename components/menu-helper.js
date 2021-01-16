import Link from "next/link";
import style from "../styles/menu.module.css";

export async function getMenu() {
  const data = await import("../data/banarasi-kitchen-menu.json");
  let menu = {};

  Object.keys(data.banarasiKitchenMenu).forEach((key) => {
    const item = data.banarasiKitchenMenu[key];

    const sectionKey = item.subsection
      ? `${item.section} - ${item.subsection}`
      : item.section;

    if (!menu[sectionKey]) {
      menu[sectionKey] = [];
    }
    const menuSection = menu[sectionKey];

    menuSection.push({
      num: item.referenceNumber,
      name: item.name,
      desc: item.description || null,
      price: item.price || null,
      priceSmall: item.smallprice || null,
      isHot: item.ishot || null,
      isVegan: item.vegan || null,
      isVegetarian: item.isvegetarian || null,
      isGlutenFree: item.glutenFree || null,
      hasSesameSeeds: item.hassesameseeds || null,
      hasMilkOrDairy: item.hasmilkordairy || null,
      hasMustard: item.hasmustard || null,
      hasCurstaceans: item.hascurstaceans || null,
      hasNuts: item.hasnuts || null,
      hasSoya: item.hassoya || null,
      hasEggs: item.haseggs || null,
      hasSulphurDioxide: item.hassulphurdioxide || null,
    });
  });

  return menu;
}

export function listOfMenus() {
  return (
    <ul className={style.menuList}>
      <li>
        <Link href="/menu">
          <a>Full</a>
        </Link>
      </li>
      <li>
        <Link href="/menu/vegetarian-menu">
          <a>Vegetarian</a>
        </Link>
      </li>
      <li>
        <Link href="/menu/vegan-menu">
          <a>Vegan</a>
        </Link>
      </li>
      <li>
        <Link href="/menu/gluten-free-menu">
          <a>Gluten Free</a>
        </Link>
      </li>
      <li>
        <Link href="/menu/nuts-free-menu">
          <a>Nuts Free</a>
        </Link>
      </li>
    </ul>
  );
}

export function renderMenu({ menu, title }) {
  function Section({ id, section, items, background }) {
    return (
      <div
        className={style.menuSection}
        style={{ backgroundColor: background }}>
        <h2 id={"section-" + id} className={style.sectionName}>
          {section}
        </h2>
        <ul className={style.foodItemList}>
          {items.map((item, idx) => (
            <Item item={item} key={idx} />
          ))}
        </ul>
      </div>
    );
  }

  function Item({ item }) {
    return (
      <li className={style.foodItem}>
        <div className={style.itemName}>{item.name}</div>
        <div className={style.prices}>
          <div className={style.price}>£{item.price}</div>
          {item.priceSmall && (
            <div className={style.smallPrice}>
              £{item.priceSmall}
              <br /> <small>(side)</small>
            </div>
          )}
        </div>
        <em className={style.desc}>{item.desc}</em>
      </li>
    );
  }

  return (
    <>
      {listOfMenus()}
      <h1 className={style.menuTitle}>{title}</h1>
      <section className="">
        {Object.keys(menu).map((key, idx) => {
          const items = menu[key];
          return (
            <Section
              key={idx}
              id={idx}
              section={key}
              items={items}
              background={idx % 2 ? "#dd7230" : "#854d27"}
            />
          );
        })}
      </section>
    </>
  );
}
