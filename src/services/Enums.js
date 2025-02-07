const categories = {
    featured: "featured",
    all: "all",
    energy: "energy",
    telecom: "telecom",
    water: "water",
    waste: "waste",
    others: "others"
}

const filterButtons = [
    {
        name: "Featured",
        category: categories.featured
    },
    {
        name: "Toti",
        category: categories.all,
        count: 365
    },
    {
        name: "Energy",
        category: categories.energy,
        count: 65
    },
    {
        name: "Internet, TV, mobil",
        category: categories.telecom,
        count: 15
    },
    {
        name: "Apa",
        category: categories.water,
        count: 110
    },
    {
        name: "Salubrizare",
        category: categories.waste,
        count: 47
    },
    {
        name: "Altii",
        category: categories.others,
        count: 128
    }
]

let Enums = {};

export default Enums = {
    categories,
    filterButtons
}