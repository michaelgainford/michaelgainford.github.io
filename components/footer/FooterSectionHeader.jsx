export default function FOOTER_SECTION_HEADER ({ text }) {
  return (
    <h3 className={`mb-2 text-base lg:text-lg tracking-wider text-left max-sm:hidden h2 font-bold lg:mb-16 max-sm:underline underline-offset-8`}>
      {text}
    </h3>
  )
}