import Image from "next/image";
import premier_league_logo_img from "@/public/football/competition-logos/premier-league-logo-white.svg";

export default function ICON_PREMIER_LEAGUE_LOGO ({classes, fill}) {
    return (
        <Image
            src={premier_league_logo_img}
            alt="EPL Logo"
            width={300}
            height={120}
            fill={fill}
            priority
            className={`[&>svg]:fill-epl ${classes}`}
        />
    );
  }