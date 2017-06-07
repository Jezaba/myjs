import {changeDogName as changeDogNameA, logDogName as logDogNameA} from './dogModuleA';
import {changeDogName as changeDogNameB, logDogName as logDogNameB} from './dogModuleB';

logDogNameA();
logDogNameB();
changeDogNameA("Zeus");
changeDogNameB("Buddys");

logDogNameA();
logDogNameB();