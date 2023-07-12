

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.599a81c5.js","_app/immutable/chunks/index.472b9089.js","_app/immutable/chunks/singletons.4a871d8c.js"];
export const stylesheets = [];
export const fonts = [];
