import { ThemeProvider } from 'styled-components'
import { DecoratorFn, Story, StoryContext } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { BrowserRouter, MemoryRouter, Route } from 'react-router-dom'
// @ts-ignore This addon has no types unfortunately
import { initializeWorker, mswDecorator } from 'msw-storybook-addon'
import { configureStore } from '@reduxjs/toolkit'
import { Provider as StoreProvider } from 'react-redux'

import { GlobalStyle } from '../src/styles/GlobalStyle'
import { lightTheme } from '../src/styles/theme'
import { rootReducer } from '../src/app-state'

initializeWorker()

export const withGlobalStyle: DecoratorFn = StoryFn => {
  return (
    <>
      <GlobalStyle />
      <StoryFn />
    </>
  )
}

export const withTheme: DecoratorFn = StoryFn => {
  return (
    <ThemeProvider theme={lightTheme}>
      <StoryFn />
    </ThemeProvider>
  )
}

export const withRouter: DecoratorFn = StoryFn => {
  return (
    <BrowserRouter>
      <StoryFn />
    </BrowserRouter>
  )
}

export const withStore: DecoratorFn = (StoryFn, { parameters }) => {
  const store = configureStore({
    reducer: rootReducer,
    preloadedState: parameters.store?.initialState,
  })

  return (
    <StoreProvider store={store}>
      <StoryFn />
    </StoreProvider>
  )
}

export const withDeeplink: DecoratorFn = (
  StoryFn: Story,
  { parameters: { deepLink } }: StoryContext,
) => {
  if (!deepLink) {
    return <StoryFn />
  }

  const { path = '/', route = '/' } = deepLink

  return (
    <MemoryRouter initialEntries={[route]}>
      <Route path={path}>
        <StoryFn />
      </Route>
    </MemoryRouter>
  )
}

// export all decorators that should be globally applied in an array
export const globalDecorators = [
  withGlobalStyle,
  withTheme,
  withDesign,
  withDeeplink,
  withRouter,
  mswDecorator,
  withStore,
]
