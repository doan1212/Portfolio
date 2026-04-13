/**
 * ComponentRegistry.js
 * 
 * Centralized registry mapping component type names (strings) to actual React components.
 * This enables dynamic component rendering from JSON data via the componentType field.
 * 
 * Usage:
 *   const Component = getComponent('HorizontalTextBox')
 *   const Component = ComponentRegistry['ImageSlider']
 */

import {
  VerticalTextBox,
  HorizontalTextBox,
  QuoteTextBox,
} from '../Components/TextBox/TextBox'

import {
  ImageCardWithDescription,
  TwoImageCardWithDescription,
} from '../Components/ImageCard/ImageCard'

import { ImageSlider } from '../Components/ImageCard/ImageSlider'

import { SectionPrimary, SectionSecondary } from '../Components/Section/Section'

import Mockup from '../Components/Frame/Mockup'

import IFrameEmbed from '../Components/EmbedBlock/IFrameEmbed'

import VideoPlayer from '../Components/MediaBlock/VideoPlayer'

/**
 * Main component registry
 * Maps string type names to React components
 */
const ComponentRegistry = {
  // TextBox Components
  'VerticalTextBox': VerticalTextBox,
  'HorizontalTextBox': HorizontalTextBox,
  'QuoteTextBox': QuoteTextBox,

  // Image Card Components
  'ImageCardWithDescription': ImageCardWithDescription,
  'TwoImageCardWithDescription': TwoImageCardWithDescription,

  // Gallery Components
  'ImageSlider': ImageSlider,

  // Section Components
  'SectionPrimary': SectionPrimary,
  'SectionSecondary': SectionSecondary,

  // Frame Components
  'Mockup': Mockup,

  // Embed Components
  'IFrameEmbed': IFrameEmbed,

  // Media Components
  'VideoPlayer': VideoPlayer,
}

/**
 * Get a component by its type name
 * @param {string} type - The component type name (e.g., 'HorizontalTextBox')
 * @returns {React.Component|null} - The component or null if not found
 */
export const getComponent = (type) => {
  const Component = ComponentRegistry[type]
  if (!Component) {
    console.warn(`[ComponentRegistry] Unknown component type: "${type}"`)
    return null
  }
  return Component
}

/**
 * Check if a component type is registered
 * @param {string} type - The component type name
 * @returns {boolean} - True if registered, false otherwise
 */
export const isComponentRegistered = (type) => {
  return type in ComponentRegistry
}

/**
 * Get all registered component type names
 * @returns {string[]} - Array of all registered component type names
 */
export const getAllRegisteredTypes = () => {
  return Object.keys(ComponentRegistry)
}

/**
 * Validate that an array of component types are all registered
 * @param {string[]} types - Array of component type names to validate
 * @returns {object} - { isValid: boolean, unregistered: string[] }
 */
export const validateComponentTypes = (types) => {
  const unregistered = types.filter(type => !isComponentRegistered(type))
  return {
    isValid: unregistered.length === 0,
    unregistered,
  }
}

export default ComponentRegistry
