

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.af8c87a0.js","_app/immutable/chunks/index.472b9089.js","_app/immutable/chunks/singletons.344b5943.js"];
export const stylesheets = [];
export const fonts = [];
