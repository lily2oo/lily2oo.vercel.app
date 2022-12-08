import React, { useState } from 'react';
import Data from './Data'
import Works_content from './Works_content.jsx'
import WorksFilter from "./WorksFilter";
// MySQLからimportする記述

const Works = () => {
    const [item, setItem] = useState(Data);

    const menuItems = [...new Set(Data.map((Val) => Val.category))];
    const filterItem = (curcat) => {
        const newItem = Data.filter((newVal) => {
            return newVal.category === curcat;
        });
        setItem(newItem);
    }

    return (
        <>
            <section id="works">
                <WorksFilter setItem={setItem} menuItems={menuItems} filterItem={filterItem} />
                <div id="works_contents">
                    <Works_content item={item} />
                </div>
            </section>
        </>
    );
};

export default Works