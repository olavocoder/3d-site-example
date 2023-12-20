function GenerateConfigLight(type, intensity, color, position){
    return{
        type: type,
        intensity: intensity,
        color: color,
        position: position
    }
}

const luz = GenerateConfigLight('point', 1, 0xffffff, [-2, -4, 11])
const luzB = GenerateConfigLight('point',1,0xffffff,[-1, -4, 11])

export {luz, luzB};