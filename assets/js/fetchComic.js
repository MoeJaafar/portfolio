async function fetchComic() {
    const email = "m.jaafar@innopolis.university";
    let response = await fetch(`https://fwd.innopolis.university/api/hw2?${params.toString()}`);
    const comicId = await response.json();
    response = await fetch(`https://fwd.innopolis.university/api/comic?id=${comicId}`);
    const comicData = await response.json();
    displayComic(comicData);
}

function displayComic(comicData) {
    const container = document.querySelector("#comic-container");
    container.textContent = ''; // clear previous data

    const img = document.createElement("img");
    img.src = comicData.img;
    img.alt = comicData.alt;

    const title = document.createElement("h2");
    title.textContent = comicData.title;

    const date = new Date(comicData.year, comicData.month - 1, comicData.day);
    const dateElement = document.createElement("p");
    dateElement.textContent = date.toLocaleDateString();

    container.appendChild(img);
    container.appendChild(title);
    container.appendChild(dateElement);
}

fetchComic();
