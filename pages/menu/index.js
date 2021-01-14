import style from "../../styles/menu.module.css";

function Section({ id, section, items, background }) {
  return (
    <div className={style.menuSection} style={{ backgroundColor: background }}>
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
      <div className={style.price}>£{item.price}</div>
      <em className={style.desc}>{item.description}</em>
    </li>
  );
}

export default function Menu({ menu }) {
  return (
    <>
      <section className="">
        {menu.map(({ id, section, items }, idx) => (
          <Section
            key={id}
            id={id}
            section={section}
            items={items}
            background={idx % 2 ? "#dd7230" : "#854d27"}
          />
        ))}
      </section>
    </>
  );
}

export async function getStaticProps() {
  const data = await import("../../data/menu.json");
  const menu = data.menu;
  return {
    props: {
      menu: data.menu,
    },
  };
}
