import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'

import * as stories from './Button.stories'

const { Default, Disabled } = composeStories(stories)

test('render button with custom children', async () => {
  render(<Default />)
  expect(screen.getByText(/hello world/i)).toBeInTheDocument()
})

test('onclick handler is not called when disabled', async () => {
  const onClickSpy = jest.fn()
  render(<Disabled onClick={onClickSpy} />)
  screen.getByRole('button').click()
  expect(onClickSpy).not.toHaveBeenCalled()
})
