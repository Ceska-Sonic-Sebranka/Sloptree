export const load = async () => {
    const { data } = await import("$lib/configuration");

    if (data.theme === "frutiger-aero") {
        await import("$lib/css/frutiger-aero.css");
    } else {
        await import("$lib/css/style.css");
    }
};