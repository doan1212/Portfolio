import React from 'react'
import { Link } from 'react-router-dom'
import { Button, OutlineGradientButton } from '../../Components/Button/Button'
 
const Component = () => {
    return (
        <div className="flex flex-col gap-3">
            <div className="flex flex-row flex-wrap gap-3">
                <Button
                    type="solid-primary"
                    size="xs"
                    children={'Solid Primary'}
                />
                <Button
                    type="solid-primary"
                    size="sm"
                    children={'Solid Primary'}
                />
                <Button
                    type="solid-secondary"
                    size="md"
                    children={'Solid Primary'}
                />
                <Button
                    type="solid-secondary"
                    size="lg"
                    children={'Solid Primary'}
                />
            </div>
            <div className="flex flex-row flex-wrap gap-3">
                <Button
                    type="outline-primary"
                    size="xs"
                    children={'Solid Primary'}
                />
                <Button
                    type="outline-primary"
                    size="sm"
                    children={'Solid Primary'}
                />
                <Button
                    type="outline-secondary"
                    size="md"
                    children={'Solid Primary'}
                />
                <Button
                    type="outline-secondary"
                    size="lg"
                    children={'Solid Primary'}
                />
            </div>
            <div className="flex flex-row flex-wrap gap-3">
                <OutlineGradientButton
                    type="primary"
                    size="xs"
                    children={'Solid Primary'}
                />
                <OutlineGradientButton
                    type="primary"
                    size="sm"
                    children={'Solid Primary'}
                />
                <OutlineGradientButton
                    type="secondary"
                    size="md"
                    children={'Solid Primary'}
                />
                <OutlineGradientButton
                    type="secondary"
                    size="lg"
                    children={'Solid Primary'}
                />
            </div>
            
        </div>
    )
}
 
export default Component