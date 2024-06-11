function showFloatingWindow(resource) {
    var window = document.getElementById(resource + 'Window');
    window.style.display = 'block';
}

function hideFloatingWindow(resource) {
    var window = document.getElementById(resource + 'Window');
    window.style.display = 'none';
}

function showInfo(resource) {
    var infoContainer = document.getElementById('infoContainer');
    var infoText = '';
    var imagePath = '';

    switch (resource) {
        case 'getStarted':
            infoText = 'Start your mining journey with MINBOT. Get started now!';
            break;
        case 'coal':
            infoText = 'Coal is a combustible black or brownish-black sedimentary rock. It is primarily composed of carbon.';
            imagePath = 'https://tse3.mm.bing.net/th?id=OIP.sOYe_BOKygKJk-WZ8ka2lgHaE8&pid=Api&P=0&h=180';
            break;
        case 'copper':
            infoText = 'Copper is a chemical element with the symbol Cu (from Latin: cuprum) and atomic number 29.';
            imagePath = 'https://tse4.mm.bing.net/th?id=OIP.oqHnFUiRuHsEgxHdPWBNiAHaE7&pid=Api&P=0&h=180';
            break;
        case 'iron':
            infoText = 'Iron is a chemical element with the symbol Fe (from Latin: ferrum) and atomic number 26.';
            imagePath = 'https://tse2.mm.bing.net/th?id=OIP.IkqLbFpCmMwbHtXnNwgLhQHaE6&pid=Api&P=0&h=180';
            break;
        case 'zinc':
            infoText = 'Zinc is a chemical element with the symbol Zn (from Latin: zincum) and atomic number 30.';
            imagePath = 'https://tse4.mm.bing.net/th?id=OIP.AiRuVLwCsHmfPdLcHnFmzQHaE7&pid=Api&P=0&h=180';
            break;
    }

    if (imagePath) {
        infoText = '<img src="' + imagePath + '" alt="' + resource + ' image" /><br />' + infoText;
    }

    infoContainer.innerHTML = infoText;
}