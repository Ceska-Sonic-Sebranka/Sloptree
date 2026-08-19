import * as simpleIcons from "simple-icons";

export function getIcon(name: string) {
    const { path, hex } = simpleIcons[name];
    return { path, hex: `#${hex}` };
}