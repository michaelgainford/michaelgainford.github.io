export default function PAGE_INTRO({ text, text_colour }) {
    return (
        <div className={`page-intro`}>
            <p className={`mx-auto mb-8 ${text_colour} font-medium text-xs/5 md:text-sm/6 tracking-wider lg:max-w-[80%] xl:mb-16 xl:text-lg`}>
                { text }
            </p>
        </div>
    )
}