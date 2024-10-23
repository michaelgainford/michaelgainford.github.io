export default function PAGE_INTRO({ text, text_colour, font_sizes, other_classes }) {
    return (
        <div className={`page-intro`}>
            <p className={`mx-auto mb-8 ${text_colour} font-medium tracking-wider ${font_sizes} ${other_classes} lg:max-w-[80%] xl:mb-16`}>
                { text }
            </p>
        </div>
    )
}