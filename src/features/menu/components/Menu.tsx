import Link from "next/link";
import clsx from "clsx";

interface MenuProps {
  items: MenuItem[];
  className?: string;
}
export const Menu = ({ items, className }: MenuProps) => {
  return (
    <ul className={clsx("flex flex-col items-end", className)}>
      {items.map((item) => (
        <li key={item.label}>
          <Link
            className="hover:bg-slate-700 active:bg-slate-500 px-1 after:content-['_◻️'] "
            href={item.path}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};
