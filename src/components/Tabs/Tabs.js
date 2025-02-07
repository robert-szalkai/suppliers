import React from 'react'

import classes from './Tabs.module.css';

const Tabs = ({ selectedCategory, setSelectedCategory, filterButtons, categories }) => {
    return (
        <div className={classes['suppliers-filters']}>
            {filterButtons && filterButtons.map((filter, index) => {
                return <button key={index}
                    className={[
                        classes['filter'],
                        selectedCategory === filter.category ? classes['selected'] : '']
                        .join(' ')}
                    onClick={() => setSelectedCategory(filter.category)}
                >
                    {filter.name}
                    {filter.category !== categories.featured && <span className={classes["count"]}>{filter.count}</span>}
                </button>
            })}
        </div>
    )
}

export default Tabs
