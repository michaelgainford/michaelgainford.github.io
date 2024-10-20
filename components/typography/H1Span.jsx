export default function H1_SPAN({ text }) {
  return (
    <h1 
      className={`
        w-full font-light leading-relaxed tracking-wide text-center text-md 
        sm:text-md 
        md:text-xl 
        max-lg:mb-4 max-lg:pt-8 max-lg:font-bold 
        lg:pb-16 lg:font-medium lg:text-3xl 
      `}
    >
      {text}
    </h1>
  )
}