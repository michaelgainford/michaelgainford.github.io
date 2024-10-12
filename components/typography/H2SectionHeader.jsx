export default function H2_SECTION_HEADER ({ text }) {
  return (
    <h2 className={`py-2 mb-2 text-sm font-normal text-slate-400 leading-relaxed tracking-wider text-center max-sm:uppercase sm:text-left md:text-xl lg:text-lg lg:py-4 lg:mb-3 xl:text-xl 2xl:mb-6`}>
      {text}
    </h2>
  )
}