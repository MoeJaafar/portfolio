

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.bbb310c6.js","_app/immutable/chunks/index.472b9089.js","_app/immutable/chunks/singletons.717cf266.js"];
export const stylesheets = [];
export const fonts = [];
