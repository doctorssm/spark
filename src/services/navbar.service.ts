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
      type: FolderType.Archive
    },
    {
      title: 'Корзина',
      icon: 'trash-alt',
      active: false,
    }
  ];

  getFolderItems(): FolderItem[]  {
    return this.folderItems;
  }
}

export default new NavBarService();
