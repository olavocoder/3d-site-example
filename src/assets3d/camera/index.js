function GenerateConfigCamera(position){
    return {position:position}
}

const camera = GenerateConfigCamera([0,0,3])
const camerab = GenerateConfigCamera([window.innerWidth/2, 0, 1000])
export {camera, camerab};