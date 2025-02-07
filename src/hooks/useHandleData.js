import React, { useEffect, useState } from "react";

const defaultCategories = {
  featured: "featured",
  all: "all",
  energy: "Energy",
  telecom: "Telecom",
  water: "Water",
  waste: "Waste",
  other: "Other",
};

const defaultFilterButtons = [
  {
    name: "Featured",
    category: defaultCategories.featured,
  },
  {
    name: "Toti",
    category: defaultCategories.all,
    count: 0,
  },
  {
    name: "Energy",
    category: defaultCategories.energy,
    count: 0,
  },
  {
    name: "Internet, TV, mobil",
    category: defaultCategories.telecom,
    count: 0,
  },
  {
    name: "Apa",
    category: defaultCategories.water,
    count: 0,
  },
  {
    name: "Salubrizare",
    category: defaultCategories.waste,
    count: 0,
  },
  {
    name: "Altii",
    category: defaultCategories.other,
    count: 0,
  },
];

const useHandleData = (suppliersList) => {
  const [categories, setCategories] = useState(defaultCategories);
  const [filterButtons, setFilterButtons] = useState(defaultFilterButtons);

  const [initialSuppliersList, setInitialSuppliersList] = useState({});

  useEffect(async () => {
    if (Object.keys(initialSuppliersList).length === 0) {
      //on first render add extra category "All"

      const { suppliersDTO: suppliersList } = await fetch(
        "https://pago.ro/suppliers"
      ).then((resp) => resp.json());

      let allSuppliers = { ...suppliersList };
      allSuppliers[categories.all] = []; // initialieze "All" property with empty array

      // fill "All" property with all suppliers
      Object.entries(allSuppliers).forEach(([key, value]) => {
        // set isEnergySupplier property on each supplier
        value.forEach((item) => {
          item.isEnergySupplier = key === "Energy";
        });

        allSuppliers[categories.all] = [
          ...allSuppliers[categories.all],
          ...value,
        ];
      });

      allSuppliers[categories.featured] = [...allSuppliers[categories.all]];

      const suppliersLengthElem = document.querySelector(".suppliers-length");
      if (suppliersLengthElem) {
        suppliersLengthElem.textContent = allSuppliers.all.length;
      }

      setInitialSuppliersList(allSuppliers);
    }
  }, []);

  useEffect(async () => {
    if (Object.keys(initialSuppliersList).length > 0) {
      let filtersWithCount = [...filterButtons];

      //update every count property from filter buttons
      filterButtons.forEach((item, index) => {
        let currentCategory = initialSuppliersList[item.category];
        if (currentCategory) {
          filtersWithCount[index].count = currentCategory.length;
        }
      });

      // get translation and update filterButtons name
      const keys = [
        "furnizori-categ-1",
        "furnizori-categ-2",
        "furnizori-categ-3",
        "furnizori-categ-4",
        "furnizori-categ-5",
        "furnizori-categ-6",
        "furnizori-categ-7",
      ];

      const translatedData = await fetch("https://pago.ro/translate", {
        method: "POST",
        body: JSON.stringify(keys),
      })
        .then((resp) => resp.json())
        .then((data) => data);

      Object.entries(translatedData).forEach(([key, value], index) => {
        filtersWithCount[index].name = value;
      });

      setFilterButtons(filtersWithCount);
    }
  }, [initialSuppliersList]);

  return { categories, filterButtons, initialSuppliersList };
};

export default useHandleData;
