export default function Component_WishlistGrid() {
	return (
		<div className="grid flex-wrap w-full grid-cols-1 gap-8 sm:grid-cols-2 md:gap-8 md:grid-cols-3 lg:grid-cols-4 lg:gap-8 3xl:grid-cols-5 2xl:gap-16 *:border *:border-slate-200/5 *:flex *:items-center *:justify-center">
			<div className="flex flex-col gap-4 p-4 item">
				<span>External Hard Drive</span>
				<div className="product-image"></div>
				<a
					className="p-2 border border-slate-200/5"
					href="https://www.ebay.co.uk/itm/385239009601?var=653120349562&mkevt=1&mkcid=1&mkrid=710-53481-19255-0&campid=5338757644&toolid=20006&customid=ad6c6a64ea984274ebb10d1dca7b252c&_trkparms=ispr%3D1&amdata=enc%3A1QwzqpcWPSN2wH5eXQEj8Iw6"
				>
					View Product Link
				</a>
				<span>Product Price</span>
			</div>
			<div className="item">Item</div>
			<div className="item">Item</div>
			<div className="item">Item</div>
			<div className="item">Item</div>
			<div className="item">Item</div>
		</div>
	);
}