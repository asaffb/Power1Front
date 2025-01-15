// assets
import { DashboardOutlined } from '@ant-design/icons';
import { MailOutlined } from '@ant-design/icons';
import { ProjectOutlined } from '@ant-design/icons';
import { FileOutlined } from '@ant-design/icons';

// icons
const icons = {
  DashboardOutlined,
  MailOutlined,
  ProjectOutlined,
  FileOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
  id: 'group-dashboard',
  title: 'Home',
  type: 'group',
  children: [
    {
      id: 'dashboard',
      title: 'Dashboard',
      type: 'item',
      url: '/dashboard/default',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    },
    {
      id: 'mailbox',
      title: 'Mailbox',
      type: 'item',
      url: '/mailbox',
      icon: icons.MailOutlined
    },
    {
      id: 'project',
      title: 'Projects',
      type: 'item',
      url: '/project',
      icon: icons.ProjectOutlined
    },
    {
      id: 'file',
      title: 'Files',
      type: 'item',
      url: '/file',
      icon: icons.FileOutlined
    }
  ]
};

export default dashboard;
