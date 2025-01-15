// assets
import { UserOutlined } from '@ant-design/icons';

// icons
const icons = {
  UserOutlined
};

// ==============================|| MENU ITEMS - PORTAL ||============================== //

const portal = {
  id: 'portal',
  title: 'Portal',
  type: 'group',
  children: [
    {
      id: 'portal-users',
      title: 'Portal Users',
      type: 'item',
      url: '/portal/user',
      icon: icons.UserOutlined
    }
  ]
};

export default portal;
