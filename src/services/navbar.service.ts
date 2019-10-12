import { FolderItem } from '../contracts';
import { FolderType } from '../enums';

export class NavBarService {
  private folderItems: FolderItem[] = [
    {
      title: 'Отправленные',
      icon: 'paper-plane',
      active: false,
      type: FolderType.Sent
    },
    {
      title: 'Черновики',
      icon: 'file',
      active: false,
      type: FolderType.Drafts
    },
    {
      title: 'Отмеченные',
      icon: 'thumbtack',
      active: false,
      type: FolderType.Marked
    },
    {
      title: 'Архив',
      icon: 'archive',
      active: false,
      type: FolderType.Archived
    },
    {
      title: 'Корзина',
      icon: 'trash-alt',
      active: false,
      type: FolderType.Deleted
    }
  ];

  getFolderItems(): FolderItem[]  {
    return this.folderItems;
  }

  addFolder(): void {
    // TODO: to store?
  }
}

export default new NavBarService();
