// Projects Registry: Dynamically Loads All Project Data
import { resolveImagePath } from '../Utils/assetResolver';

import project1 from '../Assets/Projects/project1.json';
import project2 from '../Assets/Projects/project2.json';
import project3 from '../Assets/Projects/project3.json';
import project4 from '../Assets/Projects/project4.json';
import project0 from '../Assets/Projects/project0.json';

const projects = [project0, project1, project2, project3, project4].map((project, index) => ({
    ...project,
    slug: project.slug || `project-${index + 1}`,
    routePath: project.routePath || `/projects/project-${index + 1}`
}));

const getAllProjects = () => projects;
const getProjectBySlug = (slug) => projects.find((project) => project.slug === slug);

const resolveProjectImagePaths = (project) => {
    const resolvedImageMap = {};
    Object.entries(project.imageMap || {}).forEach(([id, path]) => {
        resolvedImageMap[id] = resolveImagePath(project.slug, id);
    });
    return resolvedImageMap;
};

export { getAllProjects, getProjectBySlug, resolveProjectImagePaths };
