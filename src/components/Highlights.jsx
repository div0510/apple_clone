import React from 'react';
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {rightImg, watchImg} from "../utils/index.js";
import VideoCarousel from "./VideoCarousel.jsx";

function Highlights(props) {

    useGSAP(() => {
        gsap.to("#title", {opacity: 1, y: 0})
        gsap.to(".link", {
            opacity: 1, y: 0,
            duration: 1,
            stagger: 0.25
        })
    }, [])
    return (
        <section id={"highlights"} className={"common-padding h-full w-screen overflow-hidden bg-zinc-950"}>
            <div className={"screen-max-width"}>
                <div className={"mb-12 w-full items-end justify-between md:flex"}>
                    <h1 id={"title"} className={"section-heading"}>Get the highlights</h1>
                    <div className={"flex flex-wrap items-end gap-5"}>
                        <p className={"link"}>Watch the film
                            <img src={watchImg} alt={"watch"} className={"ml-12"}/></p>
                        <p className={"link"}>Watch the event
                            <img src={rightImg} alt={"right"} className={"ml-12"}/></p>
                    </div>
                </div>

                <VideoCarousel/>
            </div>

        </section>
    );
}

export default Highlights;