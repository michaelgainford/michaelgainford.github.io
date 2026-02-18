"use client";

export default function Component_FooterCopyright() {
	const currentYear = new Date().getFullYear();
	return (
		<div className="pt-4 pb-1 text-[10px] text-center">
			<p>Built by MG &mdash; &copy; {currentYear}</p>
		</div>
	)
} 