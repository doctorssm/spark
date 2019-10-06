import { FolderType } from '../enums';
import { NavItem } from './nav-item.interface';

export interface FolderItem extends NavItem {
  type?: FolderType;
}
