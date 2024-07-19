import React from 'react'
import { Button, OutlineGradientButton } from '../../Components/Button/Button'

const Home = () => {
    return (
        <div className="flex flex-row flex-wrap gap-3">
            <Button type="solid-primary" children={'Solid Primary'} />
            <Button type="solid-secondary" children={'Solid Primary'} />
            <Button type="outline-primary" children={'Outline Primary'} />
            <Button type="outline-secondary" children={'Outline Primary'} />
            <OutlineGradientButton
                type="primary"
                children={'Outline Gradient Primary'}
            />
            <OutlineGradientButton
                type="secondary"
                children={'Outline Gradient Secondary'}
            />
        </div>
    )
}

export default Home
