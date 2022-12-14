import React, { useState, useEffect } from 'react';
import Data from './Works'
import WorksInner from './WorksInner.jsx'
import WorksFilter from "./WorksFilter";
import gsap from 'gsap';

const Works = () => {
    const [item, setItem] = useState(Data);

    const menuItems = [...new Set(Data.map((Val) => Val.category))];
    const filterItem = (curcat) => {
        const newItem = Data.filter((newVal) => {
            return newVal.category === curcat;
        });
        setItem(newItem);
    }

    useEffect(()=>{
        gsap.fromTo("#works",{
          opacity:0
        },{
          opacity:1,
          duration:1,
        })
        gsap.fromTo(".worksFilter__link",{
            autoAlpha:0,
            width:0,
          },{
            autoAlpha:1,
            width:"auto",
            ease:"power3",
            duration:0.4,
            stagger:0.15,
        })
      })

    useEffect(() => {
        for(let i=0; i<Data.length; i++){
            const img = new Image();
            img.src = '/' + Data[i].content;
          }
        window.addEventListener('scroll', scroll_effect);
        return () => {
            window.removeEventListener('scroll', scroll_effect);
        }
    }, []);

    function scroll_effect() {
        const element = document.getElementsByClassName('works__inner');
        if (!element) return;

        const scrollY = window.pageYOffset;
        const windowH = window.innerHeight;
        var showTiming = 0;

        for (let i = 0; i < element.length; i++) {
            let elemClientRect = element[i].getBoundingClientRect();
            let elemTop = scrollY + elemClientRect.top;
            let elemBottom = scrollY + elemClientRect.bottom;
            if (scrollY > elemTop - windowH + showTiming && element[i].classList.contains('is-active')) {
                element[i].classList.remove('is-active');
                element[i].children[1].classList.remove('show');
                element[i].children[2].style = 'display:none';
            };
            if (elemBottom - windowH / 2 + showTiming > scrollY && scrollY > elemTop - windowH / 2 + showTiming && !element[i].classList.contains('is-active')) {
                element[i].classList.add('is-active');
                element[i].children[1].classList.add('show');
                element[i].children[2].style = 'display:block';
            };
        };
    };

    return (
        <>
            <section id="works">
                <WorksFilter setItem={setItem} menuItems={menuItems} filterItem={filterItem} />
                <div id="works__wrap">
                    <WorksInner item={item} />
                </div>
            </section>
        </>
    );
};

export default Works