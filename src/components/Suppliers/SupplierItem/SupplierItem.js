import React from 'react'

import classes from './SupplierItem.module.css'

const SupplierItem = ({ model, url }) => {
    return (
        <a href={url} className={classes["box"]}>
            <img src={model.supplierLogo} alt={model.supplierName} />
            <span className={classes["name"]}>{model.supplierName}</span>
        </a>
    );
}

export default SupplierItem
