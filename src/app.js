import React, { useEffect, useRef } from 'react'
import blessed from 'blessed'
import { render } from 'react-blessed'
import chalk from 'chalk'
import open from 'open'

const ACTION_ITEMS = {
  github: {
    label: 'GitHub',
    url: 'https://github.com/desko27'
  },
  twitter: {
    label: 'Twitter',
    url: 'https://twitter.com/desko27'
  },
  linkedin: {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/desko27'
  }
}

const ACTION_ITEMS_LABELS = Object.values(ACTION_ITEMS).map(x => x.label)

function App () {
  const listRef = useRef()

  useEffect(() => {
    listRef.current.focus()
  }, [])

  const handleLinkSelect = (_, index) => {
    const { url } = Object.values(ACTION_ITEMS)[index]
    open(url)
  }

  return (
    <box
      top='center'
      left='center'
      width='85%'
      height='85%'
      border={{ type: 'line' }}
      style={{ border: { fg: 'green' } }}
    >
      <text left='center'>
        {`Hey there. I'm ${chalk.blue('Ismael')}.`}
      </text>
      <text top={2} left='center'>
        {`I enjoy ${chalk.green('coding')} and ${chalk.yellow('ramen')}.`}
      </text>
      <text top='50%-5' left='center' fg='yellow'>
        {chalk.yellow(`         |
         |  /
         | /
   .~^(,&|/o.
  |\`-------^|
  \\         /
   \`======='`)}
      </text>
      <text top='100%-5' left='center'>
        {chalk.gray('Find me on:')}
      </text>
      <listbar
        ref={listRef}
        style={{ selected: { fg: 'magenta' } }}
        top='100%-3'
        left='center'
        items={ACTION_ITEMS_LABELS}
        keys
        onSelect={handleLinkSelect}
      />
    </box>
  )
}

const screen = blessed.screen({
  autoPadding: true,
  smartCSR: true,
  title: 'desko27'
})

screen.key(['escape', 'q', 'C-c'], (ch, key) => process.exit(0))
render(<App />, screen)
