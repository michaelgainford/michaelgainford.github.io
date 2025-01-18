import { urlForShopify, urlForNextJS, urlForReactJS, urlForTailwindCSS } from "@/variables/Paths";

export default function Component_FooterAboutText() {
    return (
        <p className="text-xs text-center leading-loose sm:pr-8 sm:text-left md:text-xs/relaxed lg:text-xs/loose xl:text-sm/loose lg:pr-16 [&>a:hover]:underline">
            My name is Michael. I am Frontend Developer from and living in the North West of England. By day, under my Bruce Wayne 👨🏻 persona, I currently work as a <a title="Shopify" href={urlForShopify}>Shopify</a> Developer working on e-commerce websites and stores for a large web development agency. By night, during the Batman 🦸🏻‍♂️ hours, I work with <a title="NextJS" href={urlForNextJS}>Next.js</a>, <a title="React JS" href={urlForReactJS}>React</a>, and <a title="Tailwind CSS" href={urlForTailwindCSS}>Tailwind CSS</a> to create fun, interesting and practical ways of brightening one&apos;s day. <span className="italic">I am</span> a Batman fan, for the record 🃏.
        </p>
    )
}