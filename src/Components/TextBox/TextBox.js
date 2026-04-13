// Import for nested component handling
import React from 'react'
import { getComponent } from '../../Constants/ComponentRegistry'
import { processBlockImages } from '../../Utils/imageResolver'

// Helper to get imageMap from resolved props (passed as a hidden property by ContentBlockRenderer)
const getImageMapFromProps = (props) => {
    return props.imageMap || {}
}

export const VerticalTextBox = (props) => {
    const { title, content } = props
    const imageMap = getImageMapFromProps(props)
    
    // Check if content is a nested component object (has componentType prop)
    const hasNestedComponent = content && typeof content === 'object' && content.componentType
    let nestedComponent = null
    
    if (hasNestedComponent && imageMap) {
        const NestedComponent = getComponent(content.componentType)
        if (NestedComponent) {
            const processedNested = processBlockImages(content, imageMap || {})
            nestedComponent = <NestedComponent {...processedNested} />
        }
    }
    
    // Check if content is a React element (e.g., <ul><li>...</li></ul>) vs a string
    const isReactElement = content && typeof content === 'object' && content.$$typeof
    const isString = typeof content === 'string'
    
    return (
        <div className="items-center flex flex-row justify-start p-5 gap-5">
            <div className="font-eloquiabold text-2xl text-nypink-400">
                {title}
            </div>
            <div className="text-lg font-eloquialight text-emperor-700">
                {hasNestedComponent ? nestedComponent : isReactElement ? content : isString ? <div dangerouslySetInnerHTML={{ __html: content }} /> : content}
            </div>
        </div>
    )
}

export const HorizontalTextBox = (props) => {
    const { title, content, className } = props
    const imageMap = getImageMapFromProps(props)
    
    // Check if content is a nested component object (has componentType prop)
    const hasNestedComponent = content && typeof content === 'object' && content.componentType
    let nestedComponent = null
    
    if (hasNestedComponent && imageMap) {
        const NestedComponent = getComponent(content.componentType)
        if (NestedComponent) {
            const processedNested = processBlockImages(content, imageMap || {})
            nestedComponent = <NestedComponent {...processedNested} />
        }
    }
    
    // Check if content is a React element (e.g., <ul><li>...</li></ul>) vs a string
    const isReactElement = content && typeof content === 'object' && content.$$typeof
    const isString = typeof content === 'string'
    
    return (
        <div
            className={`flex w-full flex-col gap-5 items-start justify-start ${className}`}
        >
            <div className="font-eloquiabold text-2xl text-nypink-400">
                {title}
            </div>
            <div className="text-lg font-eloquialight text-emperor-700">
                {hasNestedComponent ? nestedComponent : isReactElement ? content : isString ? <div dangerouslySetInnerHTML={{ __html: content }} /> : content}
            </div>
        </div>
    )
}

export const QuoteTextBox = ({ title, content, className }) => {
    // Handle array content (multiple quotes) vs string content
    const isArray = Array.isArray(content)
    
    return (
        <div
            className={`flex w-full flex-col items-start  gap-5 justify-start ${className}`}
        >
            <div className="font-eloquiabold text-2xl text-nypink-400">
                {title}
            </div>
            <div className="text-lg font-eloquialight text-emperor-700 flex flex-col md:grid md:grid-flow-row md:grid-cols-3 items-start justify-center gap-5">
                {isArray 
                    ? content.map((item, index) => (
                        <div key={index} dangerouslySetInnerHTML={{ __html: item }} />
                    ))
                    : <div dangerouslySetInnerHTML={{ __html: content }} />
                }
            </div>
        </div>
    )
}
