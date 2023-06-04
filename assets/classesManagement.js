import { generateID } from "./usefulFunctions.js"

class GeneralItem {

    constructor(type, name, bulk, cost) {
         this.type = type
         this.name = name
         this.bulk = bulk
         this.cost = cost
         this.id = generateID()
     }
 }

export { GeneralItem };