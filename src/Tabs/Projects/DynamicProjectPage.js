/**
 * DynamicProjectPage.js
 * 
 * Universal project page component that renders any project dynamically.
 * Replaces the hardcoded Project1.js, Project2.js, etc.
 * Uses URL slug parameter to look up the correct project JSON.
 */

import React from 'react'
import { useParams } from 'react-router-dom'
import { getProjectBySlug } from '../../Constants/ProjectsRegistry'
import DynamicProjectRenderer from '../../Components/DynamicProjectRenderer'

const DynamicProjectPage = () => {
  const { slug } = useParams()

  // Get project data from registry by slug
  const projectData = getProjectBySlug(slug)

  if (!projectData) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-4xl font-eloquiabold text-emperor-800 mb-4">
            Project Not Found
          </h1>
          <p className="text-xl font-eloquialight text-emperor-700">
            Sorry, the project "{slug}" could not be found.
          </p>
        </div>
      </div>
    )
  }

  return <DynamicProjectRenderer projectData={projectData} />
}

export default DynamicProjectPage