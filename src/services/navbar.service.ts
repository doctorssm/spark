import { EmailType } from '../enums';
import { NavItem } from '../contracts';

export class NavBarService {
  private navItems: NavItem[] = [
    {
      title: 'Отправленные',
      icon: 'paper-plane',
      type: EmailType.Sent
    },
    {
      title: 'Черновики',
      icon: 'file',
      type: EmailType.Drafts
    },
    {
      title: 'Отмеченные',
      icon: 'thumbtack',
      type: EmailType.Marked
    },
    {
      title: 'Архив',
      icon: 'archive',
      type: EmailType.Archived
    },
    {
      title: 'Корзина',
      icon: 'trash-alt',
      type: EmailType.Deleted
    }
  ];

  getNavItems(): NavItem[] {
    return [...this.navItems];
  }
}

export default new NavBarService();
