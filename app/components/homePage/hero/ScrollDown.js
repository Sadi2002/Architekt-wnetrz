export default function ScrollDown({ data }) {
  return (
    <span className="absolute bottom-[30px] opacity-[64%] right-5 text-[#E9E9E9] text-[12px] md:right-10 lg:right-12.5 2xl:text-[14px]">
      ({data.scrollDown})
    </span>
  );
}
