const images = () => {
    const imgPopup = document.createElement('div'),
       workSection = document.querySelector('.works'), // обертка всех картинах
          bigImage = document.createElement('img');

    imgPopup.classList.add('popup');

    imgPopup.style.justifyContent = 'center';
    imgPopup.style.alignItems = 'center';
    imgPopup.style.display = 'none';

    workSection.append(imgPopup);
    imgPopup.append(bigImage);

    workSection.addEventListener('click', (event) => {
        event.preventDefault();

        let target = event.target;

        if (target && target.classList.contains('preview')) {
            imgPopup.style.display = 'flex';
            const path = target.parentNode.getAttribute('href');
            bigImage.setAttribute('src', path);
        }

        if (target && target.matches('div.popup')) {
            imgPopup.style.display = 'none';
        }
    });
};

export {images};