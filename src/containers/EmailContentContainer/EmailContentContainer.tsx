import React from 'react'
import { EmailContent, ActionBar } from '../../components'
import { Email } from '../../contracts'

export class EmailContentContainer extends React.Component {
  render() {
    return (
        <section className="email-content-container">
          <div className="mb-25">
            <ActionBar />
          </div>
          <EmailContent email={
            {
              date: "2019-10-06T15:45:01.414Z",
              from: "test-1@example.com",
              subject: "Hello World 2",
              content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore error, pariatur, incidunt rem harum eaque libero iste voluptatum odio impedit consequuntur nihil nisi eius dignissimos animi. Minus accusantium maiores culpa! Sapiente dolor nisi rerum placeat sunt consequatur porro alias, enim tempora dolore? Itaque recusandae debitis blanditiis nostrum veniam, fugit magni voluptatem ab modi, pariatur impedit quidem necessitatibus amet! Velit, delectus!",
              read: false,
              deleted: false
            } as unknown as Email
          } />
        </section>
    )
  }
}
