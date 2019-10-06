import { NavItem } from '../contracts';

export class NavBarService {
  private folderItems: NavItem[] = [
    {
      title: 'Отправленные',
      icon: '',
      active: false
    },
    {
      title: 'Черновики',
      icon: '',
      active: false
    },
    {
      title: 'Отмеченные',
      icon: '',
      active: false
    },
    {
      title: 'Архив',
      icon: '',
      active: false
    },
    {
      title: 'Еще',
      icon: '',
      active: false
    }
  ];


}
