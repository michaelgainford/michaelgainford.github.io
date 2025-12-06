{/* Top level layout import styles for all pages */}
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import "./globals.css";
import Snowflakes from "@/components/seasonal/Snowflakes";

{/* Top level component imports for all pages */}
import BackToTopButton from "@/components/buttons/BackToTopButton";

{/* This is my default metadata for pages that don't have any metadata */}
export const metadata = {
	title: "Front End Developer, Merseyside, England | michaelGainford.dev",
	description: "Michael's Web Dev Playground",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className="scroll-smooth bg-slate-900">
			<body className={`${inter.className} top`}>
				<Snowflakes />
				{children}	
				<BackToTopButton />
			</body>
		</html>
	);
}
