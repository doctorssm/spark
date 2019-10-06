import React from 'react'

export class FolderList extends React.Component {
  render() {
    return (
      <>
        <div>Папки</div>
        <ul>
          <li>Отправленные</li>
          <li>Черновики</li>
          <li>Отмеченные</li>
          <li>Архив</li>
          <li>Еще</li>
        </ul>
      </>
    )
  }
}
