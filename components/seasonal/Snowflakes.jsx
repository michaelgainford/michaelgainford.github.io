const maxSnowflakes = 12;

export default function COMPONENT_SNOWFLAKES() {
    return (
        <div className="snowflakes" aria-hidden="true">
            {[...Array(maxSnowflakes)].map((_, i) => (
                <div key={i} className="snowflake">
                    <div className="inner">❅</div>
                </div>
            ))}
        </div>
    )
}