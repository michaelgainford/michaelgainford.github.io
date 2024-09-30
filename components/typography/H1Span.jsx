export default function H1_SPAN({ text }) {
  return (
    <h1 className={`w-full font-light leading-relaxed tracking-wide text-center max-lg:pt-8 text-md max-lg:font-bold sm:text-md md:text-xl lg:font-medium lg:text-3xl max-lg:mb-4 lg:pb-16`}>
      {text}
    </h1>
  )
}