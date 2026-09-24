export default function AboutParagraph({ children, className = "" }) {
  return (
    <p className={`text-md text-[#55524e] ${className}`}>
      {children}
    </p>
  );
}
