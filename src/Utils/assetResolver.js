// Asset Resolver: Dynamically Maps Image IDs to File Paths

const imageMap = {
    // Project 1 Images
    project1: {
        banner: '/Assets/Image/banner.png',
        userflow1: '/Assets/Image/userflow1.png',
        userflow2: '/Assets/Image/userflow2.png',
        userflow3: '/Assets/Image/userflow3.png',
        userflow4: '/Assets/Image/userflow4.png',
    },
    project2: {
        mock_2: '/Assets/mock_2.png',
        guide_t1: '/Assets/Image/guide_t1.png',
        guide_t2: '/Assets/Image/guide_t2.png',
    },
    project3: {
        banner: '/Assets/Image/banner.png',
        mock3: '/Assets/mock_3.png',
    },
    project4: {
        banner: '/Assets/Image/mock_4.png',
        userflow: '/Assets/Image/userflow.png',
    },
};

const resolveImagePath = (projectSlug, imageId) => {
    const projectImages = imageMap[projectSlug];
    if (!projectImages || !projectImages[imageId]) {
        throw new Error(`Image ID '${imageId}' not found for project '${projectSlug}'.`);
    }
    return projectImages[imageId];
};

export { resolveImagePath };