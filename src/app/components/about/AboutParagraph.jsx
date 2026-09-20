export default function AboutParagraph({ children, className = "" }) {
  return <p className={`text-[13px]/[21px] text-[#55524e] ${className}`}>{children}</p>;
}
