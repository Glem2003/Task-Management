//icons
import {
  MdInbox,
  FaStar,
  FaRegCalendar,
  MdWork,
  FaHeart,
  FaTrash,
  IoPersonSharp,
  IoIosArrowDown
} from '../assets/icon/icons';

export interface listProp {
  header: {
    id: string;
    text: string;
    images: React.ReactNode;
  }[];
  main: {
    id: string;
    text: string;
    images: React.ReactNode;
    element?: React.ReactNode;
    childList?: string[]
  }[];
}

export const listData: listProp = {
  header: [
    {
      id: 'Inbox',
      text: 'Inbox',
      images: (<MdInbox style={{ color: '#0098fd' }} />)
    },
    {
      id: 'Today',
      text: 'Today',
      images: (<FaStar style={{ color: '#ffe500' }} />),
    },
    {
      id: 'Coming Up',
      text: 'Coming Up',
      images: (<FaRegCalendar style={{ color: '#e53c51' }
      } />)
    }
  ],
  main: [
    {
      id: 'Personal',
      text: 'Personal',
      images: (<IoPersonSharp style={{ color: '#4db11d' }} />),
      element: (<IoIosArrowDown />),
      childList: ['Important','Work','Hobbies']
    },
    {
      id: 'Work',
      text: 'Work',
      images: (<MdWork style={{ color: '#a55a15' }} />),
      element: (<IoIosArrowDown />),
      childList: ['Leads','Administrative','Ideas']
    },
    {
      id: 'Hobbies',
      text: 'Hobbies',
      images: (<FaHeart style={{ color: '#e53c51' }} />),
      element: (<IoIosArrowDown />),
      childList: ['French Lessons','Recipes','Writing']
    },
    {
      id: 'Deleted',
      text: 'Deleted',
      images: (<FaTrash style={{ color: '#767676' }} />)
    }
  ]
}