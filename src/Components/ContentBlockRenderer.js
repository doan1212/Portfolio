/**
 * ContentBlockRenderer.js
 * 
 * Renders a single content block based on its componentType.
 * Automatically resolves image references and passes all block properties to components.
 */

import React from 'react'
import { getComponent } from '../Constants/ComponentRegistry'
import { processBlockImages } from '../Utils/imageResolver'

/**
 * Renders a content block dynamically based on componentType
 * 
 * @param {object} props
 * @param {object} props.block - The content block from JSON with componentType, content, images, etc.
 * @param {object} props.imageMap - Map of image IDs to image paths
 * @param {string} props.className - Optional CSS classes to apply to wrapper
 * 
 * @example
 * <ContentBlockRenderer
 *   block={{
 *     componentType: 'HorizontalTextBox',
 *     title: 'Discovery',
 *     content: '...'
 *   }}
 *   imageMap={imageMap}
 * />
 */
const ContentBlockRenderer = ({
  block,
  imageMap = {},
  className = '',
}) => {
  if (!block) {
    console.warn('[ContentBlockRenderer] Block is null or undefined')
    return null
  }

  if (!block.componentType) {
    console.warn('[ContentBlockRenderer] Block missing componentType:', block)
    return null
  }

  // Get the component from registry
  const Component = getComponent(block.componentType)

  if (!Component) {
    console.error(
      `[ContentBlockRenderer] Unknown component type: "${block.componentType}"`
    )
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
        <strong>Error:</strong> Component type not found: <code>{block.componentType}</code>
      </div>
    )
  }

  // Process image references in the block
  const processedBlock = processBlockImages(block, imageMap)

  // Render the component with the processed block properties
  // Pass imageMap so nested components can resolve their images
  return (
    <div className={className}>
      <Component {...processedBlock} imageMap={imageMap} />
    </div>
  )
}

export default ContentBlockRenderer
