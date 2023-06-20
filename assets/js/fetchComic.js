async function fetchComic() {
    const email = "m.jaafar@innopolis.university";
    const params = new URLSearchParams({ email: email });
    let response = await fetch(`https://fwd.innopolis.university/api/hw2?${params.toString()}`);
    const comicId = await response.json();
    response = await fetch(`https://fwd.innopolis.university/api/comic?id=${comicId}`);
    const comicData = await response.json();
    displayComic(comicData);
}

function displayComic(comicData) {
    const container = document.querySelector("#comic-container");
    container.textContent = ''; // clear previous data

    const title = document.createElement("h1");
    title.textContent = comicData.safe_title;
    title.className = 'comic-title';

    const img = document.createElement("img");
    img.src = comicData.img;
    img.alt = comicData.alt;
    img.className = 'comic-image';

    const date = new Date(comicData.year, comicData.month - 1, comicData.day);
    const dateElement = document.createElement("h2");
    dateElement.textContent = date.toLocaleDateString();
    dateElement.className = 'comic-date';


    container.appendChild(img);
    container.appendChild(title);
    container.appendChild(dateElement);
}




fetchComic();
