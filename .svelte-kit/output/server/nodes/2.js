

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.f6215342.js","_app/immutable/chunks/index.472b9089.js"];
export const stylesheets = ["_app/immutable/assets/2.2ab58c89.css"];
export const fonts = [];
