export default function SectionHeading({ number, children, id }) {
  return (
    <div className="mb-[34px] text-center [&_h2]:mt-[13px]">
      <h2 id={id}>{children}</h2>
    </div>
  );
}
