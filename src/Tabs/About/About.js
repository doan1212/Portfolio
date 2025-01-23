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
import { FcLikePlaceholder } from 'react-icons/fc'

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
                            a little more about me
                        </div>

                        <div className="flex flex-row align-text-bottom font-eloquialight text-base text-emperor-700 md:text-xl">
                            <FcLikePlaceholder />
                            Thanks for dropping by!
                            <FcLikePlaceholder />
                        </div>
                        <div className="align-text-bottom font-eloquialight text-base text-emperor-700 md:text-lg">
                            I'm Doan, a Frontend Developer and UI/UX Designer
                            based in ATL. I am a senior at Georgia Tech! I’m
                            graduating in December and I’m specializing in
                            Computational Media, a unique field that bridges
                            design and computer science, allowing me to create
                            innovative digital experiences that blend creativity
                            with technical expertise.
                        </div>
                        <div className="align-text-bottom font-eloquialight text-base text-emperor-700 md:text-lg">
                            When I'm coding as a developer, I find myself more
                            captivated by the UI aspect of applications than the
                            backend. I'm always passionate about creating
                            intuitive digital products and paying attention to
                            the tiny details that create beautiful and
                            functional interfaces.
                        </div>
                        <div className="align-text-bottom font-eloquialight text-base text-emperor-700 md:text-lg">
                            With a keen eye on understanding users’ needs and
                            transforming complex problems into thoughtful
                            solutions. I believe great design is about more than
                            aesthetics—it’s about functionality, accessibility,
                            and delighting users with experiences that feel
                            memorable and engaging. I'm always looking for new
                            opportunities to learn and grow as a developer and
                            designer.
                        </div>
                        <div className="align-text-bottom font-eloquialight text-base text-emperor-700 md:text-lg">
                            Hubbies 🤩 I love to travel and explore new places 🧳 & Cooking 🥘.
                        </div>
                    </div>
                </div>
            </SectionPrimary>
            <SectionSecondary title={'Skills & Tools'}>
                <Slider images={images} className="justify-center"></Slider>
            </SectionSecondary>
            <SectionSecondary>
                <Slider images={skills} className="justify-center"></Slider>
            </SectionSecondary>
        </div>
    )
}

export default About
