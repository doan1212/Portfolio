import React from 'react'
import { getProjectBySlug } from '../../Constants/ProjectsRegistry'
import DynamicProjectRenderer from '../../Components/DynamicProjectRenderer'

const Projects = () => {
  // Get project data from registry by slug
  const projectData = getProjectBySlug('creative-projects')

  if (!projectData) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-4xl font-eloquiabold text-emperor-800 mb-4">
            Creative Projects Not Found
          </h1>
        </div>
      </div>
    )
  }

  return <DynamicProjectRenderer projectData={projectData} />
}

export default Projects