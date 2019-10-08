import React from 'react'
import { Action } from './Action/Action';

export class ActionBar extends React.Component {
  render() {
    return (
      <div className="flex">
        {/* <Action icon={'thumbtack'} title={'Отметить как важное'} /> */}
        <Action icon={'circle'} title={'Отметить как прочитанное'} />
        {/* <Action icon={'clock'} title={'Отложить'} /> */}
        {/* <Action icon={'archive'} title={'В архив'} /> */}
        <Action icon={'trash-alt'} title={'Удалить'} />
        {/* <Action icon={'folder'} title={'Переместить'} /> */}
        {/* <Action icon={'ellipsis-h'} title={'Еще'} /> */}
      </div>
    )
  }
}
