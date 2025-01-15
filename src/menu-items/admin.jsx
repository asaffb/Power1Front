// assets
import { UserOutlined, SettingOutlined } from '@ant-design/icons';

// icons
const icons = {
  UserOutlined,
  SettingOutlined
};

// ==============================|| MENU ITEMS - ADMINISTRATION ||============================== //

const administration = {
  id: 'administration',
  title: 'Administration',
  type: 'group',
  children: [
    {
      id: 'users',
      title: 'Users',
      type: 'item',
      url: '/admin/users',
      icon: icons.UserOutlined
    },
    {
      id: 'settings',
      title: 'Settings',
      type: 'item',
      url: '/admin/settings',
      icon: icons.SettingOutlined
    }
  ]
};

export default administration;
