"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tutorial32_1 = require("./tutorial32");
console.log(tutorial32_1.exportetVariable, "xxxsss");
//Wenn man nicht alles einzeln aufführen will:
const exportingModule = require("./tutorial32");
console.log('namespace', exportingModule.exportetVariable);
//Die Default-Function importen und renamen
const defaultExportModule_1 = require("./defaultExportModule");
defaultExportModule_1.default();
//Load Import with SideEffects
require("./ModulesWithSideEffects");
