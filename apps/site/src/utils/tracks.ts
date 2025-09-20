export const getTrackId = (title: string, artists: string[]) => {
    const base = `${title}__${artists.join("_")}`.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    return base.replace(/^-+|-+$/g, "");
}