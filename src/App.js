import React, { useEffect, useState } from "react";
import classes from "./App.module.css";
import Search from "./components/Search/Search";
import Suppliers from "./components/Suppliers/Suppliers";
import Tabs from "./components/tabs/Tabs";
import Utils from "./services/Utils";

import useHandleData from "./hooks/useHandleData";
import FeaturedSlide from "./components/FeaturedSlide/FeaturedSlide";

const App = ({ isEnergySuppliersPage }) => {
    const { filterListBySearchValue } = Utils;

    const { categories, filterButtons, initialSuppliersList } = useHandleData();

    const [suppliersList, setSuppliersList] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(categories.featured);

    const [searchValue, setSearchValue] = useState("");

    const searchHandler = (event) => {
        setSearchValue(event.target.value);
    };

    useEffect(() => {
        if (Object.keys(initialSuppliersList).length > 0) {
            let filteredList = isEnergySuppliersPage
                ? initialSuppliersList.Energy
                : initialSuppliersList[categories[selectedCategory.toLowerCase()]];

            if (searchValue !== "") {
                filteredList = filterListBySearchValue(filteredList, searchValue);
            }
            setSuppliersList(filteredList);
        }
    }, [searchValue, selectedCategory, initialSuppliersList]);

    return (
        <div
            className={[classes.app, isEnergySuppliersPage ? classes.energy : ""].join(
                " "
            )}
        >
            <Search searchValue={searchValue} searchHandler={searchHandler} />

            {!isEnergySuppliersPage && (
                <Tabs
                    selectedCategory={selectedCategory}
                    filterButtons={filterButtons}
                    setSelectedCategory={setSelectedCategory}
                    categories={categories}
                />
            )}

            {selectedCategory === categories.featured && searchValue === "" ? (
                <FeaturedSlide isEnergySuppliersPage={isEnergySuppliersPage} />
            ) : (
                <Suppliers list={suppliersList} searchValue={searchValue} />
            )}
        </div>
    );
};

export default App;
