import IconHTML from './IconHTML'
import IconCSS from './IconCSS'
import IconTailwindSimple from './IconTailwindSimple'
import IconJavaScript from './IconJavaScript'
import IconReact from './IconReact'
import IconNextJS from './IconNextJS'

const IconsSkillsData = [
    {
        id: 1,
        icon: IconHTML,
        title: 'HTML5'
    },
    {
        id: 2,
        icon: IconCSS,
        title: 'CSS3'
    },
    {
        id: 3,
        icon: IconTailwindSimple,
        title: 'TailwindCSS'
    },
    {
        id: 4,
        icon: IconJavaScript,
        title: 'JavaScript'
    },
    {
        id: 5,
        icon: IconReact,
        title: 'ReactJS'
    },
    {
        id: 6,
        icon: IconNextJS,
        title: 'NextJS'
    },
]

export default function ICONS_SKILLS({ heading, heading_styles}) {
    return (
        <div className="col-span-12 px-6 py-12 transition-all duration-500 border rounded-lg border-slate-500/10 md:p-8 2xl:p-16 hover:border-amber-500 hover:bg-slate-500/10 group/built-using">
            <h2 className={`${heading_styles} group-hover/built-using:border-amber-500/80`}>{ heading }</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 [&>.flex]:justify-center [&>.flex]:items-center [&>.flex]:rounded-lg">
                {IconsSkillsData.map((icon, index) => (
                    <div key={index} className="flex p-4 transition-all duration-500 border border-slate-500/20 aspect-square hover:bg-slate-900 hover:border-amber-500 flex-col gap-4" title={icon.title}>
                        <icon.icon classes="size-8 xs:size-12 2xl:size-16"/>
                        <span className="text-xs md:text-sm md:tracking-wide">{icon.title}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}