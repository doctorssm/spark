import { EmailType } from '../enums';
import { NavItem } from '../contracts';

export class NavBarService {
  private navItems: NavItem[] = [
    {
      title: 'Отправленные',
      icon: 'paper-plane',
      active: true,
      type: EmailType.Sent
    },
    {
      title: 'Черновики',
      icon: 'file',
      active: false,
      type: EmailType.Drafts
    },
    {
      title: 'Отмеченные',
      icon: 'thumbtack',
      active: false,
      type: EmailType.Marked
    },
    {
      title: 'Архив',
      icon: 'archive',
      active: false,
      type: EmailType.Archived
    },
    {
      title: 'Корзина',
      icon: 'trash-alt',
      active: false,
      type: EmailType.Deleted
    }
  ];

  getNavItems(): NavItem[] {
    return [...this.navItems];
  }

  addNavItem(): void {
    // TODO: to store?
  }
}

export default new NavBarService();
