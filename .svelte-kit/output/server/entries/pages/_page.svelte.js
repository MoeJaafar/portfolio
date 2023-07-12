import { c as create_ssr_component, v as validate_component } from "../../chunks/index.js";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime.js";
const Header_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: 'header.svelte-5lptpx.svelte-5lptpx{height:15px;background-color:var(--first-color);padding:30px;display:flex;justify-content:center;align-items:center}nav.svelte-5lptpx ul.svelte-5lptpx{list-style-type:none;padding:0;text-align:center;margin:0}nav.svelte-5lptpx ul li.svelte-5lptpx{display:inline-block;margin-right:120px}nav.svelte-5lptpx ul li a.svelte-5lptpx{text-decoration:none;color:#333;font-family:"Comic Sans MS", "Comic Sans", cursive;font-size:20px}',
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { pageTitle } = $$props;
  if ($$props.pageTitle === void 0 && $$bindings.pageTitle && pageTitle !== void 0)
    $$bindings.pageTitle(pageTitle);
  $$result.css.add(css$2);
  return `<header class="svelte-5lptpx"><nav class="svelte-5lptpx"><ul class="svelte-5lptpx"><li class="svelte-5lptpx"><a href="/" class="svelte-5lptpx">Home</a></li>
        <li class="svelte-5lptpx"><a href="/about" class="svelte-5lptpx">About</a></li>
        <li class="svelte-5lptpx"><a href="/contact" class="svelte-5lptpx">Contact</a></li></ul></nav>
  </header>`;
});
const Footer_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ':root{--header-height:3.5rem;--hue:291 ;--first-color:hsl(var(--hue), 47%, 51%);--first-color-alt:hsl(var(--hue), 56%, 35%);--title-color:hsl(228, 8%, 95%);--text-color:hsl(228, 8%, 65%);--body-color:hsl(228, 15%, 20%);--container-color:hsl(228, 15%, 15%)}footer.svelte-1dsocha{background-color:var(--first-color);padding:20px;text-align:center;font-family:"Comic Sans MS", "Comic Sans", cursive}',
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<footer class="svelte-1dsocha"><p>© 2023 Your Website. All rights reserved.</p>
  </footer>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: `@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap");@import url('https://fonts.cdnfonts.com/css/comics');.comic-container.svelte-1i46ven{background-color:black;display:flex;flex-direction:column;align-items:center;justify-content:center}.comic-title.svelte-1i46ven{font-size:27px;-webkit-text-stroke:0.5px white;margin-top:5px;color:var(--first-color);font-family:"Comic Sans MS", "Comic Sans", cursive;margin-bottom:5px;text-align:center}.comic-alt.svelte-1i46ven{font-size:16px;color:var(--first-color);font-family:"Comic Sans MS", "Comic Sans", cursive;margin-top:10px;align-items:center;text-align:center}.comic-image.svelte-1i46ven{margin-top:50px;max-width:100%;box-shadow:0 200px 300px hsla(var(--hue), 100%, 40%, .25);border:solid black;border-color:black;height:450px;width:800px}.comic-date.svelte-1i46ven{font-size:16px;color:var(--first-color);font-family:"Comic Sans MS", "Comic Sans", cursive;text-align:center}:root{--header-height:3.5rem;--hue:291 ;--first-color:hsl(var(--hue), 47%, 51%);--first-color-alt:hsl(var(--hue), 56%, 35%);--title-color:hsl(228, 8%, 95%);--text-color:hsl(228, 8%, 65%);--body-color:hsl(228, 15%, 20%);--container-color:hsl(228, 15%, 15%)}`,
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  dayjs.extend(relativeTime);
  $$result.css.add(css);
  return `${validate_component(Header, "Header").$$render($$result, { pageTitle: "Moe" }, {}, {})}
${``}

${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
