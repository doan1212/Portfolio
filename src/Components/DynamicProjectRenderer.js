/**
 * DynamicProjectRenderer.js
 * 
 * Main orchestrator for rendering entire project pages from JSON data.
 * Handles hero section, metadata, scroll navigation, and dynamic section rendering.
 */

import React, { useState } from 'react'
import { resolveProjectImagePaths } from '../Constants/ProjectsRegistry'
import SectionRenderer from './SectionRenderer'
import ScrollToSection from './Section/ScrollToSection'
import { SectionPrimary } from './Section/Section'
import { HorizontalTextBox } from './TextBox/TextBox'
import ScrollToTop from './Section/ScrollToTop'

/**
 * Renders a complete project page dynamically from JSON
 * 
 * @param {object} props
 * @param {object} props.projectData - The project data from JSON file
 * 
 * @example
 * <DynamicProjectRenderer projectData={project1} />
 */
const DynamicProjectRenderer = ({ projectData }) => {
  const [isFlying, setIsFlying] = useState(true)
  
  if (!projectData) {
    return <div className="text-red-500">Project data not found</div>
  }

  // Resolve all image paths from imageMap
  const imageMap = projectData.imageMap || {}

  // Build section navigation array
  const sectionsDetails = projectData.sections
    ? Array.isArray(projectData.sections)
      ? projectData.sections.map(section => ({
          id: section.id,
          name: section.title,
        }))
      : Object.values(projectData.sections).map(section => ({
          id: section.id,
          name: section.title,
        }))
    : []

  return (
    <div>
      {/* Hero/Primary Section */}
      <SectionPrimary isFlying={false}>
        <div className="flex flex-col items-center justify-center gap-5 p-5 lg:flex-row">
          {imageMap.banner && (
            <div className="lg:w-1/2">
              <img
                className="h-full w-auto"
                src={imageMap.banner}
                alt={projectData.name}
              />
            </div>
          )}
          <div className="lg:w-1/2 flex flex-col items-center justify-center">
            <div className="font-eloquiabold text-5xl text-emperor-800">
              {projectData.name}
            </div>
            <div className="w-96 font-eloquialight text-xl text-emperor-700">
              {projectData.shortDescription}
            </div>
          </div>
        </div>
      </SectionPrimary>

      {/* Metadata Section (Role, Timeline, Tools, Platform) */}
      {projectData.roles && (
        <SectionPrimary>
          <div className="grid grid-cols-1 items-start md:grid-cols-2 md:flex-row">
            <HorizontalTextBox
              title="Overview"
              content={projectData.overview}
            />
            <HorizontalTextBox
              title="A Refined Scope"
              content={projectData.refinedScope}
            />
          </div>
        </SectionPrimary>
      )}

      {/* Metadata Grid */}
      {(projectData.roles || projectData.timeline || projectData.tools || projectData.platform) && (
        <SectionPrimary>
          <div className="grid grid-flow-row grid-cols-2 items-start justify-center gap-5 md:grid-cols-3 md:flex-row lg:grid-cols-5">
            {projectData.roles && (
              <HorizontalTextBox
                title="Role"
                content={
                  <ul>
                    {projectData.roles.map((role, index) => (
                      <li key={index}>{role}</li>
                    ))}
                  </ul>
                }
              />
            )}
            {projectData.timeline && (
              <HorizontalTextBox
                title="Timeline"
                content={
                  <ul>
                    {projectData.timeline.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                }
              />
            )}
            {projectData.tools && (
              <HorizontalTextBox
                title="Tools"
                content={
                  <ul>
                    {projectData.tools.map((tool, index) => (
                      <li key={index}>{tool}</li>
                    ))}
                  </ul>
                }
              />
            )}
            {projectData.platform && (
              <HorizontalTextBox
                title="Platform"
                content={
                  <ul>
                    {projectData.platform.map((plat, index) => (
                      <li key={index}>{plat}</li>
                    ))}
                  </ul>
                }
              />
            )}
          </div>
        </SectionPrimary>
      )}

      {/* Scroll Navigation Bar */}
      {sectionsDetails.length > 0 && (
        <SectionPrimary id="flyingBar" isFlying={isFlying}>
          <ScrollToSection sections={sectionsDetails} isFlying={isFlying} />
        </SectionPrimary>
      )}

      {/* Dynamic Sections from JSON */}
      {projectData.sections && (
        <>
          {Array.isArray(projectData.sections)
            ? projectData.sections.map((section, index) => (
                <SectionRenderer
                  key={section.id || index}
                  section={section}
                  imageMap={imageMap}
                />
              ))
            : Object.values(projectData.sections).map((section, index) => (
                <SectionRenderer
                  key={section.id || index}
                  section={section}
                  imageMap={imageMap}
                />
              ))}
        </>
      )}

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  )
}

export default DynamicProjectRenderer