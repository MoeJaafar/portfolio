import { c as create_ssr_component } from "../../chunks/index.js";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: `@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap");@import url('https://fonts.cdnfonts.com/css/comics');.comic-title.svelte-1783pcq{font-size:27px;-webkit-text-stroke:0.5px white;margin-top:5px;color:var(--first-color);font-family:"Comic Sans MS", "Comic Sans", cursive;margin-bottom:5px;text-align:center}.comic-alt.svelte-1783pcq{font-size:16px;color:var(--first-color);font-family:"Comic Sans MS", "Comic Sans", cursive;margin-top:10px;align-items:center;text-align:center}.comic-image.svelte-1783pcq{margin-top:50px;max-width:100%;box-shadow:0 200px 300px hsla(var(--hue), 100%, 40%, .25);border:solid black;border-color:black;height:450px;width:800px;margin-left:250px}.comic-date.svelte-1783pcq{font-size:16px;color:var(--first-color);font-family:"Comic Sans MS", "Comic Sans", cursive;text-align:center}:root{--header-height:3.5rem;--hue:291 ;--first-color:hsl(var(--hue), 47%, 51%);--first-color-alt:hsl(var(--hue), 56%, 35%);--title-color:hsl(228, 8%, 95%);--text-color:hsl(228, 8%, 65%);--body-color:hsl(228, 15%, 20%);--container-color:hsl(228, 15%, 15%);--body-font:"Poppins", sans-serif;--biggest-font-size:2rem;--bigger-font-size:1.25rem;--h1-font-size:1.5rem;--h2-font-size:1.25rem;--h3-font-size:1rem;--normal-font-size:.938rem;--small-font-size:.813rem;--smaller-font-size:.75rem;--font-regular:400;--font-medium:500;--font-semi-bold:600;--z-tooltip:10;--z-fixed:100}@media screen and (min-width: 1152px){:root{--biggest-font-size:4rem;--bigger-font-size:2rem;--h1-font-size:2.25rem;--h2-font-size:1.5rem;--h3-font-size:1.25rem;--normal-font-size:1rem;--small-font-size:.875rem;--smaller-font-size:.813rem}}.svelte-1783pcq{box-sizing:border-box;padding:0;margin:0}`,
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  dayjs.extend(relativeTime);
  const prerender = true;
  if ($$props.prerender === void 0 && $$bindings.prerender && prerender !== void 0)
    $$bindings.prerender(prerender);
  $$result.css.add(css);
  return `${``}`;
});
export {
  Page as default
};
