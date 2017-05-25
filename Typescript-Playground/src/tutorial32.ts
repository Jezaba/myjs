//sozusagen private
interface LocalInterface{}
class LocalClass{}
const LocalVariable = 123;

//Public
export interface ExportetInterface{}
export class ExportetClass{}
export const exportetVariable = 12; 
export let exportxxx:number=555;

const exportetVariableToRename = "rename me";
export{exportetVariableToRename as RenamedExportetVariable};
