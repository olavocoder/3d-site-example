import objeto from "./assets3d/utils/objeto";
import Plane from "./assets3d/utils/Plane";
import "./style.css";
import {luz, luzB} from './assets3d/luz';
import {camera, camerab} from './assets3d/camera';
import {cena, cenaColor, cenaBack} from './assets3d/cena';
import {material3d, material3dA, material3dB, material3dC, material3dD} from "./assets3d/materials";
import {configModel, configBolaB, configBolaC, configBola} from "./assets3d/objetos3d/config";




objeto('hero', configModel, material3d, luz, camera, cena);
objeto('3dA', configBola, material3dA, luz, camera, cenaBack);
objeto('3dB', configBolaB, material3dB, luz, camera, cenaColor);
objeto('3dC', configBolaC, material3dC, luz, camera, cenaBack);
Plane('planeArea', material3dD, luzB, camerab, cena, true);
