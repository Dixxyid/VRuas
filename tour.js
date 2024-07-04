let currentImageIndex = 0;
const images = [
    "#image1", "#image2", "#image3", "#image4", "#image5", 
    "#image6", "#image7", "#image8", "#image9", "#image10",
    "#image11", "#image12", "#image13", "#image14", "#image15",
    "#image16", "#image17", "#image18", "#image19", "#image20"
];

function changeImage(direction) {
    // Update current image index based on direction
    if (direction === 'next') {
        currentImageIndex = (currentImageIndex + 1) % images.length;
    } else if (direction === 'prev') {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    }
    
    // Change the sky image
    document.querySelector('#image-360').setAttribute('src', images[currentImageIndex]);

    // Update dynamic information (optional)
    const dynamicEntities = document.querySelector('#dynamic-entities');
    dynamicEntities.innerHTML = ''; // Remove old entities
    
    const infoText = document.createElement('a-text');
    infoText.setAttribute('value', 'Informasi tambahan untuk ' + images[currentImageIndex]);
    infoText.setAttribute('color', '#FFF');
    infoText.setAttribute('align', 'center');
    infoText.setAttribute('position', '0 1 -2');
    
    dynamicEntities.appendChild(infoText);
}
