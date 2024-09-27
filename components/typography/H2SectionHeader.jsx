export default function H2_SECTION_HEADER ({ text }) {
  return (
    <h2 className={`py-2 mb-1 text-sm font-light leading-relaxed tracking-wide text-center sm:text-left max-lg:font-bold sm:text-base md:text-xl lg:font-medium lg:text-2xl xl:text-3xl text-slate-400 max-lg:mb-1 lg:py-4 lg:mb-3 2xl:mb-6`}>
      {text}
    </h2>
  )
}