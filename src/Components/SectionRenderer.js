/**
 * SectionRenderer.js
 * 
 * Renders a complete section which may contain multiple content blocks.
 * Handles section-level component rendering and orchestrates child block rendering.
 */

import React from 'react'
import { getComponent } from '../Constants/ComponentRegistry'
import ContentBlockRenderer from './ContentBlockRenderer'

/**
 * Renders a section and all its child content blocks
 * 
 * @param {object} props
 * @param {object} props.section - The section from JSON with componentType, title, children, etc.
 * @param {object} props.imageMap - Map of image IDs to image paths
 * @param {string} props.blockClassName - Optional CSS classes for each child block
 * 
 * @example
 * <SectionRenderer
 *   section={{
 *     id: 'discovery',
 *     componentType: 'SectionSecondary',
 *     title: 'Discovery',
 *     children: [
 *       { componentType: 'HorizontalTextBox', title: '...', content: '...' }
 *     ]
 *   }}
 *   imageMap={imageMap}
 * />
 */
const SectionRenderer = ({
  section,
  imageMap = {},
  blockClassName = '',
}) => {
  if (!section) {
    console.warn('[SectionRenderer] Section is null or undefined')
    return null
  }

  if (!section.componentType) {
    console.warn('[SectionRenderer] Section missing componentType:', section)
    return null
  }

  // Get the section component from registry
  const SectionComponent = getComponent(section.componentType)

  if (!SectionComponent) {
    console.error(
      `[SectionRenderer] Unknown section component type: "${section.componentType}"`
    )
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded m-4">
        <strong>Error:</strong> Section component type not found: <code>{section.componentType}</code>
      </div>
    )
  }

  // Render section with all its children
  return (
    <SectionComponent
      id={section.id}
      title={section.title}
      className={section.className}
    >
      {section.children && section.children.length > 0 ? (
        section.children.map((block, index) => (
          <ContentBlockRenderer
            key={`${section.id}-block-${index}`}
            block={block}
            imageMap={imageMap}
            className={blockClassName}
          />
        ))
      ) : (
        <div className="text-gray-500 italic">
          No content blocks defined for this section
        </div>
      )}
    </SectionComponent>
  )
}

export default SectionRenderer
