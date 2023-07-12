import { c as create_ssr_component } from "../../chunks/index.js";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: `@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap");@import url('https://fonts.cdnfonts.com/css/comics');.comic-container.svelte-fjztkg{display:flex;flex-direction:column;align-items:center;justify-content:center}.comic-title.svelte-fjztkg{font-size:27px;-webkit-text-stroke:0.5px white;margin-top:5px;color:var(--first-color);font-family:"Comic Sans MS", "Comic Sans", cursive;margin-bottom:5px;text-align:center}.comic-alt.svelte-fjztkg{font-size:16px;color:var(--first-color);font-family:"Comic Sans MS", "Comic Sans", cursive;margin-top:10px;align-items:center;text-align:center}.comic-image.svelte-fjztkg{margin-top:50px;max-width:100%;box-shadow:0 200px 300px hsla(var(--hue), 100%, 40%, .25);border:solid black;border-color:black;height:450px;width:800px}.comic-date.svelte-fjztkg{font-size:16px;color:var(--first-color);font-family:"Comic Sans MS", "Comic Sans", cursive;text-align:center}`,
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  dayjs.extend(relativeTime);
  $$result.css.add(css);
  return `${``}`;
});
export {
  Page as default
};
