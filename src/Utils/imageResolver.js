/**
 * imageResolver.js
 * 
 * Utility functions to resolve image IDs from JSON to actual imported image paths.
 * Used in conjunction with imageMap in project JSON files.
 */

/**
 * Resolve a single image ID to its path
 * @param {string} imageId - The image ID (e.g., 'personaJohn')
 * @param {object} imageMap - Map of image IDs to imported image paths
 * @returns {string|null} - The resolved image path or null if not found
 */
export const resolveImageId = (imageId, imageMap) => {
  if (!imageId || !imageMap) return null
  
  const imagePath = imageMap[imageId]
  
  if (!imagePath) {
    console.warn(`[imageResolver] Image ID not found in imageMap: "${imageId}"`)
    return null
  }
  
  return imagePath
}

/**
 * Resolve a single image ID from a block
 * Handles block.imageId property
 * @param {object} block - The content block from JSON
 * @param {object} imageMap - Map of image IDs to imported image paths
 * @returns {string|null} - The resolved image path or null if not found
 */
export const resolveBlockImage = (block, imageMap) => {
  if (!block?.imageId) return null
  return resolveImageId(block.imageId, imageMap)
}

/**
 * Resolve two image IDs from a TwoImageCard block
 * Handles block.imageId1 and block.imageId2 properties
 * @param {object} block - The content block from JSON
 * @param {object} imageMap - Map of image IDs to imported image paths
 * @returns {object} - { img1: string|null, img2: string|null }
 */
export const resolveTwoBlockImages = (block, imageMap) => {
  return {
    img1: resolveImageId(block.imageId1, imageMap),
    img2: resolveImageId(block.imageId2, imageMap),
  }
}

/**
 * Resolve multiple image IDs from a block
 * Handles block.imageIds array property (for ImageSlider)
 * Returns array of { src, alt } objects compatible with ImageSlider component
 * @param {object} block - The content block from JSON
 * @param {object} imageMap - Map of image IDs to imported image paths
 * @returns {array} - Array of { src: string, alt: string } objects
 */
export const resolveBlockImages = (block, imageMap) => {
  if (!block?.imageIds || !Array.isArray(block.imageIds)) return []
  
  return block.imageIds
    .map(imageId => ({
      src: resolveImageId(imageId, imageMap),
      alt: imageId,
    }))
    .filter(image => image.src !== null)
}

/**
 * Process a content block and resolve all image references
 * Converts JSON block with image IDs to a block with resolved image paths
 * @param {object} block - The content block from JSON
 * @param {object} imageMap - Map of image IDs to imported image paths
 * @returns {object} - Block with resolved images (original block spread + resolved images)
 */
export const processBlockImages = (block, imageMap) => {
  const processedBlock = { ...block }

  // Handle single image (imageId)
  if (block.imageId) {
    const img = resolveImageId(block.imageId, imageMap)
    if (img) processedBlock.img = img
  }

  // Handle two images (imageId1, imageId2)
  if (block.imageId1 || block.imageId2) {
    const { img1, img2 } = resolveTwoBlockImages(block, imageMap)
    if (img1) processedBlock.img1 = img1
    if (img2) processedBlock.img2 = img2
  }

  // Handle multiple images (imageIds array)
  if (block.imageIds && Array.isArray(block.imageIds)) {
    const images = resolveBlockImages(block, imageMap)
    if (images.length > 0) processedBlock.images = images
  }

  return processedBlock
}

/**
 * Validate that all referenced image IDs in a block exist in the imageMap
 * @param {object} block - The content block from JSON
 * @param {object} imageMap - Map of image IDs to imported image paths
 * @returns {object} - { isValid: boolean, missingImageIds: string[] }
 */
export const validateBlockImageIds = (block, imageMap) => {
  const missingImageIds = []

  // Check single image
  if (block.imageId && !imageMap[block.imageId]) {
    missingImageIds.push(block.imageId)
  }

  // Check two images
  if (block.imageId1 && !imageMap[block.imageId1]) {
    missingImageIds.push(block.imageId1)
  }
  if (block.imageId2 && !imageMap[block.imageId2]) {
    missingImageIds.push(block.imageId2)
  }

  // Check multiple images
  if (Array.isArray(block.imageIds)) {
    block.imageIds.forEach(imageId => {
      if (!imageMap[imageId]) {
        missingImageIds.push(imageId)
      }
    })
  }

  return {
    isValid: missingImageIds.length === 0,
    missingImageIds: [...new Set(missingImageIds)], // Remove duplicates
  }
}

export default {
  resolveImageId,
  resolveBlockImage,
  resolveTwoBlockImages,
  resolveBlockImages,
  processBlockImages,
  validateBlockImageIds,
}
