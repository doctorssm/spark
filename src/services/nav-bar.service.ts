import { FolderItem } from '../contracts/folder-item.interface';
import { FolderType } from '../enums';

export class NavBarService {
  private folderItems: FolderItem[] = [
    {
      title: 'Отправленные',
      icon: '',
      active: false,
      type: FolderType.Sent
    },
    {
      title: 'Черновики',
      icon: '',
      active: false,
      type: FolderType.Drafts
    },
    {
      title: 'Отмеченные',
      icon: '',
      active: false,
      type: FolderType.Marked
    },
    {
      title: 'Архив',
      icon: '',
      active: false,
      type: FolderType.Archive
    },
    {
      title: 'Еще',
      icon: '',
      active: false,
    }
  ];

  getFolderItems(): FolderItem[]  {
    return this.folderItems;
  }
}

export default new NavBarService();