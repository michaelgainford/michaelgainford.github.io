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

export default function ICONS_SKILLS({ heading}) {
    return (
        <div className="col-span-12 px-6 py-12 transition-all duration-500 border rounded-lg border-slate-500/10 md:p-8 2xl:p-16 hover:border-amber-500 hover:bg-slate-500/10">
            <h2 className="mb-8 text-3xl font-bold lg:mt-8 lg:mb-16">{ heading }</h2>
            <div className="grid grid-cols-3 xl:grid-cols-6 gap-6 [&>.flex]:justify-center [&>.flex]:items-center [&>.flex]:rounded-lg">
                {IconsSkillsData.map((icon, index) => (
                    <div key={index} className="flex p-4 transition-all duration-500 border border-slate-500/20 aspect-square hover:bg-slate-900 hover:border-amber-500" title={icon.title}>
                        <icon.icon classes="size-8 md:size-12 lg:size-16" />
                    </div>
                ))}
            </div>
        </div>
    )
}