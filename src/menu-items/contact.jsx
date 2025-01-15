// assets
import { BankOutlined, ContactsOutlined } from '@ant-design/icons';

// icons
const icons = {
  BankOutlined,
  ContactsOutlined
};

// ==============================|| MENU ITEMS - CONTACTS ||============================== //

const contactnav = {
  id: 'contact-nav',
  title: 'Contacts',
  type: 'group',
  children: [
    {
      id: 'organization',
      title: 'Organizations',
      type: 'item',
      url: '/contact/organization',
      icon: icons.BankOutlined
    },
    {
      id: 'contact',
      title: 'Contacts',
      type: 'item',
      url: '/contact/contact',
      icon: icons.ContactsOutlined
    }
  ]
};

export default contactnav;
