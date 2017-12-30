import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react'

import Link from './Link'

const stories = storiesOf('Link', module)

stories.addDecorator(withKnobs)

stories.add('default', () => (
  <Link
    href={text('href', '#')}
    preventDefault={boolean('preventDefault', true)}
    target={text('target', '_self')}
    onClick={action('clicked')}
  >
    {text('children', 'Link')}
  </Link>
))
