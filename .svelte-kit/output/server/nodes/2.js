

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.dc65a161.js","_app/immutable/chunks/index.472b9089.js"];
export const stylesheets = ["_app/immutable/assets/2.b0670150.css"];
export const fonts = [];
