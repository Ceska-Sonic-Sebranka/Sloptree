// use `npm run make-config` if these imports do not work
import importDataJson from "../configuration/data.json";
import "../configuration/theme.css";
const importProfilePicture = Object.values(import.meta.glob<{ default: string }>('../configuration/pfp.*', { eager: true }))[0]?.default ?? "";

type ConfigData = {
    nickname: string,
    description: string,
    bio: string,
    color: string,
    canonicalUrl: string,
    locale: string,
    theme: string,
    links: {
        label: string,
        href: string,
        icon: string
    }[]
}

export const data: ConfigData = importDataJson as ConfigData;
export const profilePicture = importProfilePicture;
