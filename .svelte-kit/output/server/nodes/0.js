

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.540aed6b.js","_app/immutable/chunks/index.472b9089.js"];
export const stylesheets = [];
export const fonts = [];
