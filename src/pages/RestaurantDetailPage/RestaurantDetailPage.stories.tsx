import { ComponentStory, ComponentMeta } from '@storybook/react'
import { rest } from 'msw'

import { RestaurantDetailPage } from './RestaurantDetailPage'
import { StickyHeaderTemplate } from '../../templates/PageTemplate'

import { restaurants } from '../../stub/restaurants'

export default {
  title: 'Pages/RestaurantDetailPage',
  component: RestaurantDetailPage,
  parameters: {
    layout: 'fullscreen',
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/XW4Bcjmj3JOILjKmZjjdQd/Mealdrop?node-id=169%3A510',
    },
    deepLink: {
      route: 'restaurants/1',
      path: 'restaurants/:id',
    },
  },
} as ComponentMeta<typeof RestaurantDetailPage>

const REQUEST_URL = 'https://blab-290ab.firebaseio.com/restaurants/:id/.json'

const Template: ComponentStory<typeof RestaurantDetailPage> = args => (
  <>
    <div id="modal" />
    <StickyHeaderTemplate>
      {/*@ts-ignore */}
      <RestaurantDetailPage {...args} />
    </StickyHeaderTemplate>
  </>
)

export const Default = Template.bind({})
Default.parameters = {
  msw: [
    rest.get(REQUEST_URL, (req, res, ctx) => {
      return res(ctx.json(restaurants[0]))
    }),
  ],
}

export const Loading = Template.bind({})
Loading.parameters = {
  msw: [
    rest.get(REQUEST_URL, (req, res, ctx) => {
      return res(ctx.delay('infinite'))
    }),
  ],
}

export const NotFound = Template.bind({})
NotFound.parameters = {
  msw: [
    rest.get(REQUEST_URL, (req, res, ctx) => {
      return res(ctx.status(404))
    }),
  ],
}

export const Error = Template.bind({})
Error.parameters = {
  msw: [
    rest.get(REQUEST_URL, (req, res, ctx) => {
      return res(ctx.status(500))
    }),
  ],
}
