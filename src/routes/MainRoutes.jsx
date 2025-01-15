import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import Dashboard from 'layout/Dashboard';

const Color = Loadable(lazy(() => import('pages/component-overview/color')));
const Typography = Loadable(lazy(() => import('pages/component-overview/typography')));
const Shadow = Loadable(lazy(() => import('pages/component-overview/shadows')));
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard/index')));

// FOODZX
const MailboxPage = Loadable(lazy(() => import('pages/mailbox/mailbox')));
const ProjectListPage = Loadable(lazy(() => import('pages/project')));
const OrganizationPage = Loadable(lazy(() => import('pages/contact/organization')));
const ContactPage = Loadable(lazy(() => import('pages/contact/contact')));
const AdminUserListPage = Loadable(lazy(() => import('pages/admin/userlist')));
const AdminNewUserPage = Loadable(lazy(() => import('pages/admin/newuser')));
const AdminEditUserPage = Loadable(lazy(() => import('pages/admin/edituser')));
const PortalUserPage = Loadable(lazy(() => import('pages/portal/user')));

// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <Dashboard />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'color',
      element: <Color />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: 'mailbox',
      element: <MailboxPage />
    },
    {
      path: 'project',
      element: <ProjectListPage />
    },
    {
      path: 'contact/organization',
      element: <OrganizationPage />
    },
    {
      path: 'contact/contact',
      element: <ContactPage />
    },
    {
      path: 'admin/users',
      element: <AdminUserListPage />
    },
    {
      path: 'admin/newuser',
      element: <AdminNewUserPage />
    },
    {
      path: 'admin/edituser/:userId',
      element: <AdminEditUserPage />
    },
    {
      path: 'portal/user',
      element: <PortalUserPage />
    },
    {
      path: 'sample-page',
      element: <SamplePage />
    },
    {
      path: 'shadow',
      element: <Shadow />
    },
    {
      path: 'typography',
      element: <Typography />
    }
  ]
};

export default MainRoutes;
