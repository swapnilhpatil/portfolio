import React from 'react';
import { useRouter } from 'next/router';

const ProjectDetailPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  // Fetch project details based on the `id` parameter or use static data
  const project = {
    id: id as string,
    title: 'Project 1',
    description: 'Description for Project 1',
    // Add more project details as needed
  };

  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      {/* Add project details, screenshots, and links to the project */}
    </div>
  );
};

export default ProjectDetailPage;