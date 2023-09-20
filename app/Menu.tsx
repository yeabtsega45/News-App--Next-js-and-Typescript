"use client";

interface Link {
  id: number;
  name: string;
  value: string;
}

interface MenuProps {
  active: number;
  setActive: (id: number) => void;
  setCategory: (value: string) => void;
}

function Menu({ active, setActive, setCategory }: MenuProps) {
  const links: Link[] = [
    { id: 1, name: "General", value: "general" },
    { id: 2, name: "Business", value: "business" },
    { id: 3, name: "Entertainment", value: "entertainment" },
    { id: 4, name: "Health", value: "health" },
    { id: 5, name: "Science", value: "science" },
    { id: 6, name: "Sports", value: "sports" },
    { id: 7, name: "Technology", value: "technology" },
  ];

  function onClick(id: number, value: string) {
    setActive(id);
    setCategory(value);
  }

  return (
    <nav>
      <ul className="grid grid-cols-4 md:grid-cols-7 text-xs md:text-sm gap-4 pb-10 max-w-6xl mx-auto border-b">
        {links.map((link) => (
          <li
            key={link.id}
            className={active === link.id ? "active" : "navLink"}
            onClick={() => onClick(link.id, link.value)}
          >
            {link.name}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Menu;
