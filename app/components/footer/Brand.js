export default function Brand({ data }) {
  return (
    <h2 className="order-5 text-[100px] leading-[75px] font-cormorant text-[#F4E5BE] uppercase lg:text-[150px] lg:leading-[100px] lg:order-[0]">
      {data.brand}
    </h2>
  );
}
