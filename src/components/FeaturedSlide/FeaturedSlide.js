import React from 'react'

import classes from './FeaturedSlide.module.css';

const FeaturedSlide = ({ isEnergySuppliersPage }) => {
    return (
        <div className={classes["featured"]}>
            <div
                className={
                    [classes["featured-box"], isEnergySuppliersPage
                        ? classes["bg-energy"]
                        : classes["bg-normal"]].join(' ')
                }
            ></div>
        </div>
    );
};

export default FeaturedSlide
