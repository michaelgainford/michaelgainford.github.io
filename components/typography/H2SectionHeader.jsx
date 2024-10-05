export default function H2_SECTION_HEADER ({ text }) {
  return (
    <h2 className={`py-2 mb-1 text-sm font-light text-slate-400 leading-relaxed tracking-wide text-center sm:text-left max-lg:font-bold  md:text-xl max-lg:mb-1 lg:font-medium lg:text-2xl lg:py-4 lg:mb-3 2xl:mb-6`}>
      {text}
    </h2>
  )
}