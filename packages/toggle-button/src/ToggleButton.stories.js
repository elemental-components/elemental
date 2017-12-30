import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react'

import ToggleButton from './ToggleButton'

const stories = storiesOf('ToggleButton', module)

stories.addDecorator(withKnobs)

stories.add('default', () => (
  <ToggleButton
    onChange={action('clicked')}
    toggled={boolean('toggled', false)}
  >
    {text('children', 'Toggle Button')}
  </ToggleButton>
))
