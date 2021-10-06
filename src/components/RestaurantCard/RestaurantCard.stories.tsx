import { ComponentMeta, ComponentStory } from '@storybook/react'

import { RestaurantCard } from './'
import { restaurants } from '../../stub/restaurants'

export default {
  title: 'Components/RestaurantCard',
  component: RestaurantCard,
  argTypes: {
    rating: {
      control: {
        type: 'range',
        min: 0,
        max: 5,
        step: 0.1,
      },
    },
  },
  parameters: {
    design: {
      type: 'experimental-figspec',
      url:
        'https://www.figma.com/file/XW4Bcjmj3JOILjKmZjjdQd/Foodenters?node-id=332%3A1644',
    },
    // accessToken: process.env.FIGMA_ACCESS_TOKEN,
  },
} as ComponentMeta<typeof RestaurantCard>

const Basic: ComponentStory<typeof RestaurantCard> = args => (
  <RestaurantCard {...args} />
)

export const Default = Basic.bind({})
Default.args = {
  ...restaurants[0],
}

export const New = Basic.bind({})
New.args = {
  ...Default.args,
  isNew: true,
}

export const Closed = Basic.bind({})
Closed.args = {
  ...Default.args,
  isClosed: true,
}

export const Loading = Basic.bind({})
Loading.args = {
  ...Default.args,
  isLoading: true,
}
