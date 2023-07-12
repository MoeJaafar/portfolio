import { c as create_ssr_component, d as add_attribute, e as escape } from "../../chunks/index.js";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: `@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap");@import url('https://fonts.cdnfonts.com/css/comics');.comic-title.svelte-16gp47h{font-size:27px;-webkit-text-stroke:0.5px white;margin-top:5px;color:var(--first-color);font-family:"Comic Sans MS", "Comic Sans", cursive;margin-bottom:5px;text-align:center}.comic-alt.svelte-16gp47h{font-size:16px;color:var(--first-color);font-family:"Comic Sans MS", "Comic Sans", cursive;margin-top:10px;align-items:center;text-align:center}.comic-image.svelte-16gp47h{margin-top:50px;max-width:100%;box-shadow:0 200px 300px hsla(var(--hue), 100%, 40%, .25);border:solid black;border-color:black;height:450px;width:800px;margin-left:250px}.comic-date.svelte-16gp47h{font-size:16px;color:var(--first-color);font-family:"Comic Sans MS", "Comic Sans", cursive;text-align:center}`,
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  dayjs.extend(relativeTime);
  let comicData;
  onMount(async () => {
    const email = new URLSearchParams();
    email.append("email", "m.jaafar@innopolis.university");
    const identifier = await fetch("https://fwd.innopolis.app/api/hw2?" + email.toString());
    const data = await identifier.json();
    const response = await fetch("https://fwd.innopolis.university/api/comic?id=" + data);
    comicData = await response.json();
  });
  function formatDate(date) {
    return dayjs().set("year", parseInt(date.year)).set("month", parseInt(date.month) - 1).set("date", parseInt(date.day)).fromNow();
  }
  $$result.css.add(css);
  return `${comicData ? `<div class="comic-container"><img${add_attribute("src", comicData.img, 0)}${add_attribute("alt", comicData.alt, 0)} class="comic-image svelte-16gp47h">

    <h2 class="comic-title svelte-16gp47h">${escape(comicData.safe_title)}</h2>

    <p class="comic-alt svelte-16gp47h">${escape(comicData.alt)}</p>

    <p class="comic-date svelte-16gp47h">${escape(formatDate(comicData))}</p></div>` : ``}`;
});
export {
  Page as default
};
