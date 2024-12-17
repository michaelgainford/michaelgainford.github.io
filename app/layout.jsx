import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import "./globals.css";

{/* This is my default metadata for pages that don't have any metadata */}
export const metadata = {
	title: "Front End Developer, Merseyside, England | michaelGainford.dev",
	description: "Michael's Web Dev Playground",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className="scroll-smooth">
			<body className={`${inter.className}`}>
				{children}	
			</body>
		</html>
	);
}
