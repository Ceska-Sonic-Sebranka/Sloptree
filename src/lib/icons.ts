import * as simpleIcons from "simple-icons";

export type Icon =
    | { kind: "simple"; path: string; hex: string }
    | { kind: "url"; src: string };

export function getIcon(name: string) {
    const isImageUrl = /^(https?:\/\/|data:image\/)/i.test(name);
    if (isImageUrl) {
        return { kind: "url", src: name } satisfies Icon;
    }

    const icon = simpleIcons[name as keyof typeof simpleIcons];

    const { path, hex } = icon;
    return { kind: "simple", path, hex: `#${hex}` } satisfies Icon;
}