const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryEl = document.querySelector('.gallery');
galleryEl.style.display = 'flex';
galleryEl.style.flexWrap = 'wrap';
galleryEl.style.justifyContent = 'space-between';

const galleryItems = images.map(image => {
  const liEl = document.createElement('li');
  liEl.classList.add('gallery-item');
  liEl.style.listStyleType = 'none';
  liEl.style.flexBasis = 'calc(100%/3 - 10px)';
  liEl.style.marginBottom = '20px';

  const imgEl = document.createElement('img');
  imgEl.src = image.url;
  imgEl.alt = image.alt;
  imgEl.classList.add('gallery-image');
  imgEl.style.width = '100%';
  imgEl.style.height = 'auto';


  liEl.appendChild(imgEl);
  galleryEl.appendChild(liEl);
});

console.log(galleryEl);