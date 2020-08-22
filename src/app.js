import React, { Component } from 'react'
import blessed from 'blessed'
import { render } from 'react-blessed'

class App extends Component {
  render () {
    return (
      <box
        top='center'
        left='center'
        width='50%'
        height='50%'
        border={{ type: 'line' }}
        style={{ border: { fg: 'blue' } }}
      >
        {`Hey there. I'm Ismael.
I enjoy coding and ramen.`}
      </box>
    )
  }
}

const screen = blessed.screen({
  autoPadding: true,
  smartCSR: true,
  title: 'desko27: hey there!'
})

screen.key(['escape', 'q', 'C-c'], (ch, key) => process.exit(0))
render(<App />, screen)
