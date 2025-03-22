import HomePage from 'pages/HomePage/HomePage';
import AboutPage from 'pages/AboutPage/AboutPage';
import ProjectsPage from 'pages/ProjectsPage/ProjectsPage';
// import Project1Page from 'pages/projects/Project1Page';

import projectList from 'Projects';

import { Navigate } from 'react-router-dom';

const routesConfig = [
  { path: '/home', element: <HomePage />},
  { path: '/about', element: <AboutPage />},
  { path: '/projects', element: <ProjectsPage />},
  ...projectList.map(project => ({
    path: project.navSrc,
    element: project.page
  })),
  //default case when no route is matched. Navigate to home page.
  {path: '*', element: <Navigate to="/home" replace /> }
];

export default routesConfig;
