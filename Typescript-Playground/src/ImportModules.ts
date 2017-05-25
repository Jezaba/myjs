import {  //nach Eingabe des Pfades ist alles sofort sichtbar
    ExportetClass,
    ExportetInterface,
    exportetVariable as RENAMEDimportetVariable, //RENAME
    RenamedExportetVariable  //
} from "./tutorial32";
console.log(RENAMEDimportetVariable,"xxxsss");


//Wenn man nicht alles einzeln aufführen will:
import * as exportingModule from './tutorial32';
console.log('namespace',exportingModule.exportetVariable);



//Die Default-Function importen und renamen
import RENAMEDdefaultExportetFunction
    from './defaultExportModule';
RENAMEDdefaultExportetFunction();





//Load Import with SideEffects
import './ModulesWithSideEffects';

