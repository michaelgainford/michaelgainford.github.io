import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// This is my default metadata for pages that don't have any metadata
export const metadata = {
	title: `Front End Developer, Merseyside, England | MichaelGainford.dev`,
	description: `Michael's Web Dev Playground`,
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className="scroll-smooth">
			<body className={`${inter.className}`}>{children}</body>
		</html>
	);
}
