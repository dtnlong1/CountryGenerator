

document.querySelector('#btnLoad').addEventListener('click', () => {
    if(document.querySelector('#countryName') !== null) {
        document.querySelector('#countryName').remove()
    }
    if(document.querySelector('#countryFlag') !== null) {
        document.querySelector('#countryFlag').remove()
    }
    getCountryInfo()
})


async function getCountryInfo() {
    const response = await fetch('/countryinfo')
    const data = await response.json()
    const rndInt = Math.floor(Math.random() * data.length) + 1
    
    const countryName = data[rndInt].name.common
    const countryFlag = data[rndInt].flags.png
    
    let countryNameDiv = document.createElement('div')
    countryNameDiv.id = 'countryName'
    countryNameDiv.textContent = countryName
    document.querySelector('#countryWrapper').appendChild(countryNameDiv);

    let img = document.createElement('img');
    img.id = 'countryFlag'
    img.src = countryFlag;
    img.alt = countryName + 'flag'
    document.querySelector('#countryWrapper').appendChild(img);
} 


