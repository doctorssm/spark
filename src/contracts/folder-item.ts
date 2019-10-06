import { FolderType } from '../enums';
import { NavItem } from './nav-item';

export interface FolderItem extends NavItem {
  type?: FolderType;
}
