export default function Legal({ data }) {
  return (
    <div className="w-full mb-20 lg:w-auto lg:mb-0">
      <ul className="flex flex-col gap-2.5">
        {data.legal.map((link, index) => (
          <li key={index}>{link.label}</li>
        ))}
      </ul>
    </div>
  );
}
