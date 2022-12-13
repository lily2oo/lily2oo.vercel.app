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
                <div id="works-contents">
                    <Works_content item={item} />
                </div>
            </section>
        </>
    );
};

function scroll_effect() {
    const element = document.getElementsByClassName('Works-content');
    if (!element) return;

    const scrollY = window.pageYOffset;
    const windowH = window.innerHeight;
    var showTiming = 0;
    for (let i = 0; i < element.length; i++) {
        let elemClientRect = element[i].getBoundingClientRect();
        let elemTop = scrollY + elemClientRect.top;
        let elemBottom = scrollY + elemClientRect.bottom;
        let elemH = elemBottom -elemTop;
        if (scrollY > elemTop - windowH + showTiming && element[i].classList.contains('is-selected')) {
            element[i].classList.remove('is-selected');
            element[i].children[1].classList.remove('is-show');
        };
        if (elemBottom - windowH / 2 + showTiming > scrollY && scrollY > elemTop - windowH / 2 + showTiming && !element[i].classList.contains('is-selected')) {
            element[i].classList.add('is-selected');
            element[i].children[1].classList.add('is-show');
        };
    };
};

window.addEventListener('scroll', scroll_effect);

export default Works