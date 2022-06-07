let plantedPlants = []

export const addPlant = (seedObj) => {
    if (Array.isArray(seedObj)) {
        plantedPlants.push(seedObj[0])
        plantedPlants.push(seedObj[1])
    } else {
        plantedPlants.push(seedObj)
    }
}

export const usePlants = () => {
    return plantedPlants
}