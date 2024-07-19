import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../Components/Button/Button'
 
const Home = () => {
    return (
        <div className='flex flex-row flex-wrap gap-3'>
            <Button type="gradient" color="primary" children={"Gradient Primary"} transition={"basic"}/>
            <Button type="gradient-outline" color="primary" children={"Gradient Outline Primary"} transition={"basic"}/>
            <Button type="solid" color="primary" children={"Solid Primary"} transition={"basic"}/>
            <Button type="solid" color="secondary" children={"Solid Primary"} transition={"basic"}/>
            <Button type="outline" color="primary" children={"Outline Primary"} transition={"basic"}/>
            <Button type="outline" color="secondary" children={"Outline Primary"} transition={"basic"}/>
        </div>
    )
}
 
export default Home