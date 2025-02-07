import React from "react";
import NoResults from "../NoResults/NoResults";
import SupplierItem from "./SupplierItem/SupplierItem";

import classes from "./Suppliers.module.css";

const Suppliers = ({ list, searchValue }) => {
  return (
    <div className={classes.container}>
      {list && list.length > 0 ? (
        list.map((item, index) => (
          <SupplierItem
            model={item}
            url={item.isEnergySupplier ? `/furnizori/${item.friendlyURL}` : undefined}
            key={item.providerId}
          />
        ))
      ) : (
        <NoResults searchValue={searchValue} />
      )}
    </div>
  );
};

export default Suppliers;
