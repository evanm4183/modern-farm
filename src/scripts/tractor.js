import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"
import { addPlant } from "./field.js"

export const plantSeeds = (yearlyPlan) => {
    for (const row of yearlyPlan) {
        for (const plot of row) {
            if (plot === "Asparagus") {
                addPlant(createAsparagus())
            } else if (plot === "Corn") {
                addPlant(createCorn())
            } else if (plot === "Potato") {
                addPlant(createPotato())
            } else if (plot === "Soybean") {
                addPlant(createSoybean())
            } else if (plot === "Sunflower") {
                addPlant(createSunflower())
            } else {
                addPlant(createWheat())
            }
        }
    }
}