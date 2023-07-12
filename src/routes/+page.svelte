<script>
  import { onMount } from 'svelte';
  import Header from '../components/Header.svelte';
  import Footer from '../components/Footer.svelte';
  import dayjs from 'dayjs';
  import relativeTime from 'dayjs/plugin/relativeTime';

  dayjs.extend(relativeTime);

    
  let comicData;

  onMount(async () => {
  try {
    const email = new URLSearchParams();
    email.append('email', 'm.jaafar@innopolis.university');

    const identifier = await fetch('https://fwd.innopolis.app/api/hw2?' + email.toString());
    const data = await identifier.json();

    const response = await fetch('https://fwd.innopolis.university/api/comic?id=' + data);
    comicData = await response.json();
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
});


  function formatDate(date) {
    return dayjs().set('year', parseInt(date.year)).set('month', parseInt(date.month) - 1).set('date', parseInt(date.day)).fromNow();
  }
</script>
<Header pageTitle="Moe" />
{#if comicData}
  <div class="comic-container">
    <img src={comicData.img} alt={comicData.alt} class="comic-image" />

    <h2 class="comic-title">{comicData.safe_title}</h2>

    <p class="comic-alt">{comicData.alt}</p>

    <p class="comic-date">{formatDate(comicData)}</p>
  </div>
{/if}

<Footer />
  
  <style>
    
   /*=============== GOOGLE FONTS ===============*/
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap");

/*=============== Homework2 ===============*/
@import url('https://fonts.cdnfonts.com/css/comics');




.comic-container {
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  

}

.comic-title {
  font-size: 27px;
  -webkit-text-stroke: 0.5px white; 
  margin-top: 5px;
  color: var(--first-color);
  font-family: "Comic Sans MS", "Comic Sans", cursive;
  margin-bottom: 5px;
  text-align: center;

}

.comic-alt{
  font-size: 16px;
  color: var(--first-color);
  font-family: "Comic Sans MS", "Comic Sans", cursive;
  margin-top: 10px;   
  align-items: center;
  text-align: center;

  

  
}

.comic-image {
  margin-top: 50px;
  max-width: 100%;
  box-shadow: 0 200px 300px hsla(var(--hue), 100%, 40%, .25);
  border: solid black;
  border-color: black;
  height: 450px;
  width: 800px;
}

.comic-date {
  font-size: 16px;
  color: var(--first-color);
  font-family: "Comic Sans MS", "Comic Sans", cursive;
  text-align: center;

}




/*=============== VARIABLES CSS ===============*/
:root {
  --header-height: 3.5rem;

  /*========== Colors ==========*/

  --hue: 291 ;
  --first-color: hsl(var(--hue), 47%, 51%);
  --first-color-alt: hsl(var(--hue), 56%, 35%);
  --title-color: hsl(228, 8%, 95%);
  --text-color: hsl(228, 8%, 65%);
  --body-color: hsl(228, 15%, 20%);
  --container-color: hsl(228, 15%, 15%);
}
  </style>