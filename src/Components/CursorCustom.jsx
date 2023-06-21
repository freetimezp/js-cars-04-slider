import React, { useEffect } from 'react';

import { gsap, Power2 } from 'gsap';

const CursorCustom = () => {
    const cursor = document.getElementById("cursor-custom");
    const links = document.getElementsByTagName("a");

    let mouseX = 0;
    let mouseY = 0;
    let posX = 0;
    let posY = 0;

    function mouseCoord(e) {
        mouseX = e.pageX;
        mouseY = e.pageY;
        //console.log(mouseX);
    }

    gsap.to({}, 0.01, {
        repeat: -1,
        onRepeat: () => {
            posX += (mouseX - posX) / 6;
            posY += (mouseY - posY) / 6;

            gsap.set(cursor, {
                css: {
                    left: posX,
                    top: posY,
                }
            })
        }
    });

    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener("mouseover", () => {
            cursor.classList.add("active");
        });
        links[i].addEventListener("mouseout", () => {
            cursor.classList.remove("active");
        });
    }

    useEffect(() => {
        const body = document.querySelector("body");

        body.addEventListener("mousemove", (e) => {
            mouseCoord(e);
        });
    }, []);

    return (
        <div id="cursor-custom"></div>
    );
};

export default CursorCustom;
