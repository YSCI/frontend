import { lazy } from 'react';

const GroupsPage = lazy(() =>
  import('pages/GroupsPage').then((module) => ({ default: module.GroupsPage }))
);
const ProfessionsPage = lazy(() =>
  import('pages/ProfessionsPage').then((module) => ({
    default: module.ProfessionsPage
  }))
);
const UsersPage = lazy(() =>
  import('pages/UsersPage').then((module) => ({ default: module.UsersPage }))
);
const RegionsPage = lazy(() =>
  import('pages/RegionsPage').then((module) => ({
    default: module.RegionsPage
  }))
);
const StudentsPage = lazy(() =>
  import('pages/StudentsPage').then((module) => ({
    default: module.StudentsPage
  }))
);
const StatusesPage = lazy(() =>
  import('pages/StatusesPage').then((module) => ({
    default: module.StatusesPage
  }))
);
const PrivilegesPage = lazy(() =>
  import('pages/PrivilegesPage').then((module) => ({
    default: module.PrivilegesPage
  }))
);
const CommunitiesPage = lazy(() =>
  import('pages/CommunitiesPage').then((module) => ({
    default: module.CommunitiesPage
  }))
);
const CitizenshipPage = lazy(() =>
  import('pages/CitizenshipPage').then((module) => ({
    default: module.CitizenshipPage
  }))
);
const CommissariatsPage = lazy(() =>
  import('pages/CommissariatsPage').then((module) => ({
    default: module.CommissariatsPage
  }))
);
const NationalitiesPage = lazy(() =>
  import('pages/NationalitiesPage').then((module) => ({
    default: module.NationalitiesPage
  }))
);
const HealthStatusesPage = lazy(() =>
  import('pages/HealthStatusesPage').then((module) => ({
    default: module.HealthStatusesPage
  }))
);
const CommandsPage = lazy(() =>
  import('pages/CommandsPage').then((module) => ({
    default: module.CommandsPage
  }))
);
const StudentProfilePage = lazy(() =>
  import('pages/StudentProfilePage').then((module) => ({
    default: module.StudentProfilePage
  }))
);
const CommandsHistoryPage = lazy(() =>
  import('pages/CommandsHistoryPage').then((module) => ({
    default: module.CommandsHistoryPage
  }))
);

export const routes = [
  {
    id: 101,
    path: '/commands-history',
    isProtected: true,
    component: CommandsHistoryPage
  },
  {
    id: 1,
    path: '/commands',
    isProtected: true,
    component: CommandsPage
  },
  {
    id: 2,
    path: '/students',
    isProtected: true,
    component: StudentsPage
  },
  {
    id: 3,
    path: '/student/:studentId',
    basePath: '/student',
    isProtected: true,
    component: StudentProfilePage
  },
  {
    id: 4,
    path: '/professions',
    isProtected: true,
    component: ProfessionsPage
  },
  {
    id: 5,
    path: '/users',
    isProtected: true,
    component: UsersPage
  },
  {
    id: 6,
    path: '/citizenships',
    isProtected: true,
    component: CitizenshipPage
  },
  {
    id: 7,
    path: '/health-statuses',
    isProtected: true,
    component: HealthStatusesPage
  },
  {
    id: 8,
    path: '/statuses',
    isProtected: true,
    component: StatusesPage
  },
  {
    id: 9,
    path: '/regions',
    isProtected: true,
    component: RegionsPage
  },
  {
    id: 10,
    path: '/regions',
    isProtected: true,
    component: RegionsPage
  },
  {
    id: 11,
    path: '/nationalities',
    isProtected: true,
    component: NationalitiesPage
  },
  {
    id: 12,
    path: '/privileges',
    isProtected: true,
    component: PrivilegesPage
  },
  {
    id: 13,
    path: '/commissariats',
    isProtected: true,
    component: CommissariatsPage
  },
  {
    id: 14,
    path: '/communities',
    isProtected: true,
    component: CommunitiesPage
  },
  {
    id: 15,
    path: '/groups',
    isProtected: true,
    component: GroupsPage
  }
];
