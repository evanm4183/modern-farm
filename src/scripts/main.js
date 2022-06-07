import { createPlan } from "./plan.js"
import { addPlant, usePlants } from "./field.js"
import { plantSeeds } from "./tractor.js"
import { harvestPlants } from "./harvester.js"
import { Catalog } from "./catalog.js"

import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"

const yearlyPlan = createPlan()
plantSeeds(yearlyPlan)
const plantedPlants = usePlants()
const harvestedPlants = harvestPlants(plantedPlants)

const htmlString = Catalog(harvestedPlants)
const htmlElement = document.querySelector(".container")
htmlElement.innerHTML = htmlString