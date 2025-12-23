export default function Component_H1Span({ text, font_sizes, other_classes }) {
  return (
    <h1 className={`w-full leading-relaxed tracking-wide text-center text-md text-xl md:text-2xl xl:text-3xl max-lg:mb-4 max-lg:pt-8 font-bold lg:pb-16 lg:text-3xl ${font_sizes} ${other_classes}`}>
      {text}
    </h1>
  )
}