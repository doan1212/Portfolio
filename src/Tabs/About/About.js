import React from 'react'
import { Link } from 'react-router-dom'
import {
    SectionPrimary,
    SectionSecondary,
} from '../../Components/Section/Section'
import doan from '../../Assets/Image/doan.png'
import Slider from '../../Components/Slider/Slider'
import js from '../../Assets/Image/js.png'
import reactjs from '../../Assets/Image/react.png'
import html from '../../Assets/Image/html.png'
import css from '../../Assets/Image/css.png'
import java from '../../Assets/Image/java.png'
import py from '../../Assets/Image/py.png'
import c from '../../Assets/Image/C.png'
import figma from '../../Assets/Image/figma.png'
import ai from '../../Assets/Image/ai.png'
import ps from '../../Assets/Image/ps.png'
import blender from '../../Assets/Image/blender.png'
import unity from '../../Assets/Image/unity.png'
import db from '../../Assets/Image/db.png'
import git from '../../Assets/Image/git.png'
import tailwind from '../../Assets/Image/tail.png'
import node from '../../Assets/Image/node.png'
import vs from '../../Assets/Image/vs.png'
import maze from '../../Assets/Image/maze.png'
import mod from '../../Assets/Image/mod.png'
import aframe from '../../Assets/Image/aframe.png'
import post from '../../Assets/Image/post.png'
import processing from '../../Assets/Image/processing.png'

const About = () => {
    const images = [
        { src: js, alt: 'JavaScript' },
        { src: java, alt: 'Java' },
        { src: css, alt: 'CSS' },
        { src: py, alt: 'Python' },
        { src: html, alt: 'HTML' },
        { src: reactjs, alt: 'React' },
        { src: c, alt: 'C' },
    ]

    const skills = [
        { src: figma, alt: 'Figma' },
        { src: ai, alt: 'Illustrator' },
        { src: ps, alt: 'Photoshop' },
        { src: blender, alt: 'Blender' },
        { src: unity, alt: 'Unity' },
        { src: db, alt: 'Database' },
        { src: git, alt: 'Git' },
        { src: tailwind, alt: 'Tailwind' },
        { src: node, alt: 'Node' },
        { src: vs, alt: 'Visual Studio' },
        { src: maze, alt: 'Maze' },
        { src: mod, alt: 'Mod' },
        { src: aframe, alt: 'A-Frame' },
        { src: post, alt: 'Postman' },
        { src: processing, alt: 'Processing' },
    ]

    return (
        <div>
            <SectionPrimary className="bg-gradient-to-r from-wisteria-500 to-nypink-400">
                <div className="flex flex-col items-center gap-5 md:flex-row md:items-start">
                    <div className="h-1/2 w-1/2 justify-start md:h-max md:w-max">
                        <img src={doan} alt="doan" />
                    </div>
                    <div className="flex flex-col justify-center gap-6 px-10">
                        <div className="align-text-bottom font-laviossa text-lg text-wisteria-600 md:text-4xl">
                            About Me
                        </div>

                        <div className="align-text-bottom font-eloquialight text-sm text-emperor-700 md:text-xl">
                            I'm Flora Sheen Lorem Ipsum is simply dummy text of
                            the printing and typesetting industry. Lorem Ipsum
                            has been the industry's standard dummy text ever
                            since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to specimen book.
                        </div>
                        <div className="align-text-bottom font-eloquialight text-sm text-emperor-700 md:text-xl">
                            I'm Flora Sheen Lorem Ipsum is simply dummy text of
                            the printing and typesetting industry.
                        </div>
                    </div>
                </div>
            </SectionPrimary>
            <SectionSecondary title={'a little more about me...'}>
                <Slider images={images} className="justify-center"></Slider>
            </SectionSecondary>
            <SectionSecondary>
                <Slider images={skills} className="justify-center"></Slider>
            </SectionSecondary>
            <SectionPrimary></SectionPrimary>
        </div>
    )
}

export default About
