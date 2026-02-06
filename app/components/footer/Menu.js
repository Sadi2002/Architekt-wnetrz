import Link from "next/link";

export default function Menu({ data }) {
  return (
    <div className="w-full mb-10 lg:w-auto lg:mb-0">
      <ul className="flex flex-col gap-2.5">
        {data.menu.map((link, index) => (
          <li key={index}>
            <Link href={link.link}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
