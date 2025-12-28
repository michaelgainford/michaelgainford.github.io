{/********************************
  ICON IMPORTS
*********************************/}

import {
	Icon_Resource,
	Icon_Codepen,
	Icon_ColourPalettes,
	Icon_Docs,
	Icon_Font,
	Icon_GitHub,
	Icon_LinkedIn,
	Icon_NextJS,
	Icon_TailwindSimple,
	Icon_W3Schools
} from './Icons.jsx';


{/********************************
  DEV RESOURCES
*********************************/}
const devResources = [
	{
		name: "Can I Use",
		resourceData: {
			slug: "can-i-use",
			url: "https://caniuse.com",
			description: "Can I Use is a tool that provides up-to-date browser support tables for support of front-end web technologies on desktop and mobile web browsers.",
			screenshot: "/dev-resources/screenshot-of--can-i-use.webp",
			home_icon_fill: "fill-transparent",
			icon_fill: "fill-transparent",
			icon: Icon_Resource,
			tags: ["web dev", "browsers"],
			featured: false
		}
	},
	{
		name: "Codepen",
		resourceData: {
			slug: "codepen",
			url: "https://codepen.io",
			description: "CodePen is a social development environment for front-end designers and developers. Build and deploy a website, show off your work, build test cases to learn and debug, and find inspiration.",
			screenshot: "/dev-resources/screenshot-of--codepen.webp",
			home_icon_fill: "fill-slate-400",
			icon_fill: "fill-slate-400",
			icon: Icon_Codepen,
			tags: ["code", "sandbox"],
			featured: true
		}
	},
	{
		name: "Coolors",
		resourceData: {
			slug: "coolors",
			url: "https://coolors.co",
			description: "Coolors is a super fast colour scheme generator for designers and developers. Get your perfect palette at your fingertips.",
			screenshot: "/dev-resources/screenshot-of--coolors.webp",
			home_icon_fill: "fill-slate-400",
			icon_fill: "fill-slate-400",
			icon: Icon_ColourPalettes,
			tags: ["colours", "design"],
			featured: true
		}
	},
	{
		name: "CSS Stats",
		resourceData: {
			slug: "css-stats",
			url: "https://cssstats.com",
			description: "CSS Stats provides analytics and visualizations for your stylesheets. This information can be used to improve consistency in your design, track performance of your app, and diagnose complex areas before it snowballs out of control.",
			screenshot: "/dev-resources/screenshot-of--css-stats.webp",
			home_icon_fill: "fill-slate-400",
			icon_fill: "fill-slate-400",
			icon: Icon_Resource,
			tags: ["css", "analytics"],
			featured: false
		}
	},
	{
		name: "CSS Tricks",
		resourceData: {
			slug: "css-tricks",
			url: "https://css-tricks.com",
			description: "CSS-Tricks is a website about web design and development. It was created by Chris Coyier in 2007. It is a well-known site for web developers.",
			screenshot: "/dev-resources/screenshot-of--css-tricks.webp",
			home_icon_fill: "fill-slate-400",
			icon_fill: "fill-slate-400",
			icon: Icon_Resource,
			tags: ["css", "tutorials"],
			featured: false
		}
	},
	{
		name: "Font Awesome",
		resourceData: {
			slug: "font-awesome",
			url: "https://fontawesome.com",
			description: "Font Awesome is a font and icon toolkit based on CSS and LESS. It was made by Dave Gandy for use with Bootstrap, and later was incorporated into the BootstrapCDN.",
			screenshot: "/dev-resources/screenshot-of--font-awesome.webp",
			home_icon_fill: "fill-slate-400",
			icon_fill: "fill-slate-400",
			icon: Icon_Font,
			tags: ["typography", "icons"],
			featured: false
		}
	},
	{
		name: "GitHub",
		resourceData: {
			slug: "github",
			url: "https://github.com",
			description: "GitHub is a web-based platform for version control using git. It is also where users can collaborate on or adopt open-source code projects, fork code, share ideas and more.",
			screenshot: "/dev-resources/screenshot-of--github.webp",
			home_icon_fill: "fill-slate-400",
			icon_fill: "fill-slate-400",
			icon: Icon_GitHub,
			tags: ["code", "dev tools"],
			featured: true
		}
	},
	{
		name: "Google Analytics",
		resourceData: {
			slug: "google-analytics",
			url: "https://analytics.google.com",
			description: "Google Analytics is a web analytics service offered by Google that tracks and reports website traffic, currently as a platform inside the Google Marketing Platform brand.",
			screenshot: "/dev-resources/screenshot-of--google-analytics.webp",
			home_icon_fill: "fill-slate-400",
			icon_fill: "fill-slate-400",
			icon: Icon_Resource,
			tags: ["analytics"],
			featured: false
		}
	},
	{
		name: "Google Fonts",
		resourceData: {
			slug: "google-fonts",
			url: "https://fonts.google.com",
			description: "Google Fonts is a library of free licensed font families, an interactive web directory for browsing the library, and APIs for conveniently using the fonts via CSS and Android.",
			screenshot: "/dev-resources/screenshot-of--google-fonts.webp",
			home_icon_fill: "fill-slate-400",
			icon_fill: "fill-slate-400",
			icon: Icon_Font,
			tags: ["typography"],
			featured: true
		}
	},
	{
		name: "HTML5 Doctor",
		resourceData: {
			slug: "html5-doctor",
			url: "http://html5doctor.com",
			description: "HTML5 Doctor is helping you implement HTML5 today. This site is packed with articles, web development tips, and all the code you need to get started.",
			screenshot: "/dev-resources/screenshot-of--html5-doctor.webp",
			home_icon_fill: "fill-slate-400",
			icon_fill: "fill-slate-400",
			icon: Icon_Resource,
			tags: ["html", "docs"],
			featured: false
		}
	},
	{
		name: "Krystal UK",
		resourceData: {
			slug: "krystal",
			url: "https://krystal.uk",
			description: "Krystal is a UK-based hosting company that offers a range of hosting services, including shared hosting, VPS hosting, and dedicated servers.",
			screenshot: "/dev-resources/screenshot-of--krystal-uk.webp",
			home_icon_fill: "fill-slate-400",
			icon_fill: "fill-slate-400",
			icon: Icon_Resource,
			tags: ["hosting", "domains"],
			featured: false
		}
	},
	{
		name: "LinkedIn",
		resourceData: {
			slug: "linkedin",
			url: "https://linkedin.com",
			description: "LinkedIn is a business and employment-oriented online service that operates via websites and mobile apps. It is mainly used for professional networking, including employers posting jobs and job seekers posting their CVs.",
			screenshot: "/dev-resources/screenshot-of--linkedin.webp",
			home_icon_fill: "fill-slate-400",
			icon_fill: "fill-slate-400",
			icon: Icon_LinkedIn,
			tags: ["networking", "social", "jobs"],
			featured: false
		}
	},
	{
		name: "MDN Web Docs",
		resourceData: {
			slug: "mdn-docs",
			url: "https://developer.mozilla.org/en-US/",
			description: "MDN Web Docs is the ultimate resource for developers. It is a wiki that provides developers with information on how to use open web technologies including HTML, CSS, and JavaScript.",
			screenshot: "/dev-resources/screenshot-of--mdn-web-docs.webp",
			home_icon_fill: "fill-slate-400",
			icon_fill: "fill-slate-400",
			icon: Icon_Docs,
			tags: ["docs", "web dev"],
			featured: true
		}
	},
	{
		name: "Next.js",
		resourceData: {
			slug: "nextjs",
			url: "https://nextjs.org",
			description: "Next.js is a React framework that enables functionality such as server-side rendering and generating static websites for React based web applications.",
			screenshot: "/dev-resources/screenshot-of--nextjs.webp",
			home_icon_fill: "fill-slate-400",
			icon_fill: "fill-slate-400",
			icon: Icon_NextJS,
			tags: ["js", "react"],
			featured: true
		}
	},
	{
		name: "PageSpeed Insights",
		resourceData: {
			slug: "google-analytics",
			url: "https://developers.google.com/speed/pagespeed/insights/",
			description: "PageSpeed Insights is a tool that helps you identify ways to make your site faster and more mobile-friendly.",
			screenshot: "/dev-resources/screenshot-of--pagespeed-insights.webp",
			home_icon_fill: "fill-slate-400",
			icon_fill: "fill-slate-400",
			icon: Icon_Resource,
			tags: ["analytics"],
			featured: false
		}
	},
	{
		name: "Shopify Cheat Sheets",
		resourceData: {
			slug: "shopify",
			url: "https://cheat.markdunkley.com/",
			description: "Shopify Cheat Sheets is a collection of cheat sheets for Shopify developers. It includes a Liquid cheat sheet, a Shopify cheat sheet, and a Shopify theme cheat sheet.",
			screenshot: "/dev-resources/screenshot-of--shopify-cheat-sheet.webp",
			home_icon_fill: "fill-slate-400",
			icon_fill: "fill-slate-400",
			icon: Icon_Resource,
			tags: ["cheat sheets", "shopify"],
			featured: false
		}
	},
	{
		name: "SVG Repo",
		resourceData: {
			slug: "template",
			url: "https://svgrepo.com",
			description: "SVG Repo is a great resource for free SVG icons. It has a large collection of icons that you can use in your projects.",
			screenshot: "/dev-resources/screenshot-of--svg-repo.webp",
			home_icon_fill: "fill-slate-400",
			icon_fill: "fill-slate-400",
			icon: Icon_Resource,
			tags: ["icons", "svg"],
			featured: false
		}
	},
	{
		name: "Tailwind CSS",
		resourceData: {
			slug: "tailwind-css",
			url: "https://tailwindcss.com",
			description: "Tailwind CSS is a utility-first CSS framework for rapidly building custom designs. It is a highly customizable, low-level CSS framework that gives you all of the building blocks you need to build bespoke designs without any annoying opinionated styles you have to fight to override.",
			screenshot: "/dev-resources/screenshot-of--tailwind-css.webp",
			home_icon_fill: "fill-slate-400",
			icon_fill: "fill-slate-400",
			icon: Icon_TailwindSimple,
			tags: ["css"],
			featured: true
		}
	},
	{
		name: "W3 Schools",
		resourceData: {
			slug: "w3-schools",
			url: "https://w3schools.com",
			description: "W3Schools is a web developer information website, with tutorials and references relating to web development topics such as HTML, CSS, JavaScript, PHP, SQL, and JQuery.",
			screenshot: "/dev-resources/screenshot-of--w3-schools.webp",
			home_icon_fill: "fill-slate-400",
			icon_fill: "fill-slate-400",
			icon: Icon_W3Schools,
			tags: ["docs", "tutorials"],
			featured: true
		}
	},
	{
		name: "WebAIM",
		resourceData: {
			slug: "webaim",
			url: "https://webaim.org",
			description: "WebAIM is a non-profit organization that provides web accessibility solutions. It is a great resource for learning about web accessibility and how to make your websites more accessible.",
			screenshot: "/dev-resources/screenshot-of--web-aim.webp",
			home_icon_fill: "fill-slate-400",
			icon_fill: "fill-slate-400",
			icon: Icon_Resource,
			tags: ["accessibility", "web dev"],
			featured: false
		}
	},
	{
		name: "YouTube",
		resourceData: {
			slug: "youtube",
			url: "https://youtube.com",
			description: "YouTube is a video-sharing platform that allows users to upload, view, rate, share, add to playlists, report, comment on videos, and subscribe to other users.",
			screenshot: "/dev-resources/screenshot-of--youtube.webp",
			home_icon_fill: "fill-slate-400",
			icon_fill: "fill-slate-400",
			icon: Icon_Resource,
			tags: ["social", "tutorials"],
			featured: false
		}
	},
	{
		name: "Vector Logo Zone",
		resourceData: {
			slug: "vector-logo-zone",
			url: "https://vectorlogo.zone",
			description: "Vector Logo Zone is a site that provides high-quality vector logos in SVG format. It is a great resource for finding logos for your projects.",
			screenshot: "/dev-resources/screenshot-of--vector-logo-zone.webp",
			home_icon_fill: "fill-slate-400",
			icon_fill: "fill-slate-400",
			icon: Icon_Resource,
			tags: ["logos", "svg"],
			featured: false
		}
	},
	{
		name: "GitHub Profile Generator",
		resourceData: {
			slug: "github-profile-generator",
			url: "https://rahuldkjain.github.io/gh-profile-readme-generator/",
			description: "GitHub Profile Generator is a tool that generates a GitHub profile README file for your GitHub profile. It is a great way to showcase your skills and projects on your GitHub profile.",
			screenshot: "/dev-resources/screenshot-of--github-profile-generator.webp",
			home_icon_fill: "fill-slate-400",
			icon_fill: "fill-slate-400",
			icon: Icon_GitHub,
			tags: ["github", "profile"],
			featured: false
		}
	},
	{
		name: "Hero Patterns",
		resourceData: {
			slug: "hero-patterns",
			url: "https://heropatterns.com",
			description: "Hero Patterns is a collection of repeatable SVG background patterns for you to use on your digital projects.",
			screenshot: "/dev-resources/screenshot-of--hero-patterns.webp",
			home_icon_fill: "fill-slate-400",
			icon_fill: "fill-slate-400",
			icon: Icon_Resource,
			tags: ["patterns", "backgrounds"],
			featured: false
		}
	},
	{
		name: "Tailwind Color",
		resourceData: {
			slug: "tailwind-color",
			url: "https://tailwindcolor.com",
			description: "Tailwind Color is a tool that helps you generate colour palettes for your Tailwind CSS projects.",
			screenshot: "/dev-resources/screenshot-of--tailwind-color.webp",
			home_icon_fill: "fill-slate-400",
			icon_fill: "fill-slate-400",
			icon: Icon_Resource,
			tags: ["colours", "tailwind"],
			featured: false
		}
	},
	{
		name: "Shade Studio",
		resourceData: {
			slug: "shade-studio",
			url: "https://laura.media/shade-studio/",
			description: "Shade Studio is a tool that helps you generate colour palettes for your Tailwind CSS projects.",
			screenshot: "/dev-resources/screenshot-of--shade-studio.webp",
			home_icon_fill: "fill-slate-400",
			icon_fill: "fill-slate-400",
			icon: Icon_Resource,
			tags: ["tailwind", "colours"],
			featured: false
		}
	} 
];

const featuredResources = devResources.filter(resource => resource.resourceData.featured === true);
const featuredResourcesSortedByName = featuredResources.sort((a, b) => a.name.localeCompare(b.name));

{/********************************
	EXPORTS
*********************************/}
export { 
	devResources,
	featuredResources,
	featuredResourcesSortedByName
};