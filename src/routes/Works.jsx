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

// 作戦失敗

// function scroll_effect(){
//     const element = document.getElementsByClassName('Works-content');
//     if(!element) return;

//     const scrollY = window.pageYOffset;
//     const windowH = window.innerHeight;
//     var showTiming = 0;
//     for(let i = 0; i < element.length; i++){
//         let elemClientRect = element[i].getBoundingClientRect();
//         let elemTop = scrollY + elemClientRect.top;
//         let elemBottom = scrollY + elemClientRect.bottom;
//         if(elemBottom + elemTop - windowH + showTiming > scrollY > elemTop - windowH + showTiming && !element[i].classList.contains('is-show')){
//             element[i].classList.add('is-show');
//         }
//     };
// };

// window.addEventListener('scroll', scroll_effect);

export default Works