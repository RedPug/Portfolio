import HomePage from 'pages/HomePage/HomePage';
// import AboutPage from 'pages/AboutPage/AboutPage';
// import ProjectsPage from 'pages/ProjectsPage/ProjectsPage';

import ProjectWrapper from 'pages/projects/ProjectWrapper/ProjectWrapper';

import projectList from 'Projects';

import { Navigate } from 'react-router-dom';

const routesConfig = [
  { path: '/', element: <HomePage />},
  // { path: '/projects', element: <ProjectsPage />},
  ...projectList.map(project => ({
    path: project.navSrc,
    element: <ProjectWrapper title={project.title}>{project.page}</ProjectWrapper>
  })),
  //default case when no route is matched. Navigate to home page.
  {path: '*', element: <Navigate to="/" replace /> }
];

export default routesConfig;
