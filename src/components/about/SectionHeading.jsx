export default function SectionHeading({ number, children, id }) {
  return (
    <div className="mb-[34px] text-center [&_h2]:mt-[13px]">
      <span className="block font-mono-brand text-[10px]/[14px] font-bold tracking-[.14em] uppercase text-[#89651d]">
        {number} / THE U GROUP
      </span>
      <h2 id={id}>{children}</h2>
    </div>
  );
}
