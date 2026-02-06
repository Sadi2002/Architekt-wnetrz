import Link from "next/link";

export default function Contact({ data }) {
  return (
    <div className="w-full mb-10 lg:w-auto lg:mb-0">
      <ul className="flex flex-col gap-2.5">
        <li>
          <Link href="#">{data.contact.address}</Link>
        </li>
        <li>
          <Link href={`tel:${data.contact.phone}`}>{data.contact.phone}</Link>
        </li>
        <li>
          <Link href={`mailto:${data.contact.email}`}>
            {data.contact.email}
          </Link>
        </li>
      </ul>
    </div>
  );
}
