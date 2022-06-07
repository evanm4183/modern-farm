export const harvestPlants = (plantedPlants) => {
    let cropsToSell = []

    for (const plant of plantedPlants) {
        if (plant.type === "Corn") {
            for (let i = 0; i < plant.output / 2; i++) {
                cropsToSell.push(plant)
            }
        } else {
            for (let i = 0; i < plant.output; i++) {
                cropsToSell.push(plant)
            }
        }
    }

    return cropsToSell
}