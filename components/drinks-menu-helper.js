import Link from "next/link";
import style from "../styles/menu.module.css";

export async function getMenu() {
  const data = await import("../data/drinks-menu.json");
  let menu = {};

  let lastReference,
    lastSection,
    lastSubSection,
    lastName,
    lastAlcoholPct,
    lastVolume,
    lastPrice;

  Object.keys(data.banarasiKitchenMenu).forEach((key) => {
    const item = data.banarasiKitchenMenu[key];

    if (!item.reference) {
      return;
    }

    const reference = (lastReference = item.reference || lastReference);
    const section = (lastSection = item.section || lastSection);
    const subSection = (lastSubSection =
      item.subsection || lastSubSection || null);
    const name = (lastName = item.name || lastName);
    const volume = item.volume || null;
    const price = (lastPrice = item.price || lastPrice);
    let alcoholPct = (lastAlcoholPct =
      item.alcoholPct || lastAlcoholPct || null);

    if (!isNaN(+alcoholPct)) {
      alcoholPct = (alcoholPct * 100).toFixed(1) + "%";
    }

    if (!item.isRemoved) {
      const sectionKey = subSection ? `${section} - ${subSection}` : section;

      if (!menu[sectionKey]) {
        menu[sectionKey] = [];
      }
      const menuSection = menu[sectionKey];

      menuSection.push({
        reference,
        section,
        subSection,
        name,
        alcoholPct,
        volume,
        price,
      });
    }
  });

  //   let menuItems = {};
  //   let lastItem = null;
  //   menu.forEach((item) => {
  //     if (lastreference === item.reference) {
  //       lastItem.variants.push({ volume: item.volume, price: item.price });
  //       return;
  //     }
  //     lastItem = item;
  //     menuItems.push({
  //       ...item,
  //       variants: [{ volume: item.volume, price: item.price }],
  //     });
  //   });

  return menu;
}

export function listOfMenus() {
  return (
    <ul className={style.menuList}>
      <li>
        <Link href="/drinks">
          <a>In House</a>
        </Link>
      </li>
      <li>
        <Link href="/drinks/take-away">
          <a>Take Away</a>
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
        <ul className={style.drinksList}>
          {items.map((item, idx) => (
            <Item item={item} key={idx} />
          ))}
        </ul>
      </div>
    );
  }

  let previousItemReference = null;

  function Item({ item }) {
    const isPreviousItem = item.reference === previousItemReference;
    previousItemReference = item.reference;
    return (
      <li className={style.drinkItem}>
        <div className={style.drinkName}>
          {!isPreviousItem && (
            <>
              {item.name}{" "}
              <span className={style.number}>({item.reference})</span>
            </>
          )}
        </div>
        <div className={style.alcoholPct}>
          {!isPreviousItem && item.alcoholPct}
        </div>
        <div className={style.volume}>{item.volume}</div>
        <div className={style.drinkPrice}>£{item.price.toFixed(2)}</div>
      </li>
    );
  }

  return (
    <>
      {/* {listOfMenus()} */}
      <h1 className={style.menuTitle}>{title}</h1>
      <section className={style.menu}>
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
