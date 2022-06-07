export const Catalog = (harvestedPlants) => {
    let htmlString = ""

    for (const plant of harvestedPlants) {
        htmlString += `<section class="plant">${plant.type}</section>`
    }

    return htmlString
}