import './back.jpg';

//color : example -> 0x00ff00
//texture: import -> './arquivo.jpg' 

// configuracao de Cena
function GenerateConfigScene(color, width, height){
    return {
        color : color,
        width: width,
        height: height
    }
}

const cena = GenerateConfigScene(['texture', 'back.jpg'], window.innerWidth, window.innerHeight)
const cenaBack = GenerateConfigScene(['texture', 'back.jpg'],300,300)
const cenaColor = GenerateConfigScene(['color', 0xeee9d9], 300, 300)
export {cena, cenaColor, cenaBack}

