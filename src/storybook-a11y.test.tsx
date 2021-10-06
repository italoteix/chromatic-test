import { render } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import initStoryshots from '@storybook/addon-storyshots'

expect.extend(toHaveNoViolations)

initStoryshots({
  suite: 'A11y checks',
  test: async ({ story, context }) => {
    const component = story.render(context)
    const { container } = render(component)
    expect(await axe(container)).toHaveNoViolations()
  },
  storyKindRegex: /Components/,
  storyNameRegex: 'Default',
})
