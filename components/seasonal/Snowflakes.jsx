const maxSnowflakes = 12;

export default function Component_Snowflakes() {
	return (
		<div className="snowflakes" aria-hidden="true">
			{[...Array(maxSnowflakes)].map((_, i) => (
				<div key={i} className="snowflake">
					<div className="inner">❅</div>
				</div>
			))}
		</div>
	);
}