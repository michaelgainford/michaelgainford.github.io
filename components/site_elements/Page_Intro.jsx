export default function COMPONENT_PAGE_INTRO({ text, text_colour, classes_text_colour, font_sizes, classes_font_sizes, classes_width, classes_margin, other_classes, classes_other }) {
    return (
        <div className="page-intro">
            <p className={`mx-auto mb-8 ${classes_margin} xl:mb-16 ${classes_width} lg:max-w-[80%] ${text_colour} ${classes_text_colour} font-medium tracking-wider ${font_sizes} ${classes_font_sizes} motion motion-preset-fade motion-delay-[600ms] ${other_classes} ${classes_other}`}>
                { text }
            </p>
        </div>
    )
}