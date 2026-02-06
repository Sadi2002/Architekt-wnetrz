export default function Company({ data }) {
  return (
    <div className="w-full mb-10 lg:w-auto lg:mb-0">
      <ul className="flex flex-col gap-2.5">
        <li>REGON: {data.company.regon}</li>
        <li>NIP: {data.company.nip}</li>
      </ul>
    </div>
  );
}
