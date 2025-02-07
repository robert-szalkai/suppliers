const sortSuppliersByCategory = (suppliers) => {
    let groupedList = {};
    suppliers.forEach((item, index) => {
        if (!groupedList[item.supplierCategory]) {
            groupedList[item.supplierCategory] = [];
            groupedList[item.supplierCategory].push(item);
            return;
        }
        groupedList[item.supplierCategory].push(item);
    })
    console.log(groupedList);
    return groupedList;
}

const filterListBySearchValue = (list, value) => {
    let searchedList = [...list];
    searchedList = searchedList.filter(item => item.supplierName.toLowerCase().includes(value.toLowerCase()));
    return searchedList;
}

let Utils = {
    sortSuppliersByCategory,
    filterListBySearchValue
}

export default Utils