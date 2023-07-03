import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import {ComicData} from './interfaces'

dayjs.extend(relativeTime);

const email = new URLSearchParams();
email.append('email', 'm.jaafar@innopolis.university');

fetch('https://fwd.innopolis.app/api/hw2?' + email.toString())
  .then(identifier => identifier.json())
  .then(data => {
    fetch('https://fwd.innopolis.university/api/comic?id=' + data)
      .then(response => response.json())
      .then((Img: ComicData) => {

        const date = dayjs().set('year', Img.year).set('month', Img.month - 1).set('date', Img.day);

        const imageElement = document.createElement('img');
        imageElement.src = Img.img;
        imageElement.alt = Img.alt;
        imageElement.className = 'comic-image'; // Add the class to the image

        const titleElement = document.createElement('h2');
        titleElement.textContent = Img.safe_title;
        titleElement.className = 'comic-title'; // Add the class to the title

        const altElement = document.createElement('p'); // create p tag for alt text
        altElement.textContent = Img.alt; // set its text content to be the alt
        altElement.className = 'comic-alt'; // Add the class to the alt text

        const dateElement = document.createElement('p');
        dateElement.textContent = date.fromNow();
        dateElement.className = 'comic-date'; // Add the class to the date

        const container = document.getElementById('image');
        if (container) {
          // Create a new div for the comic
          const comicContainer = document.createElement('div');
          comicContainer.className = 'comic-container';
        
          
          comicContainer.appendChild(imageElement);
          comicContainer.appendChild(altElement);
          comicContainer.appendChild(titleElement);
          comicContainer.appendChild(dateElement);
        
          // Append the new div to the main container
          container.appendChild(comicContainer);
        } else {
          console.error('Container not found');
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  });
