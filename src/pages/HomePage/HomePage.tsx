import styled from 'styled-components'

import { CategoriesSection } from './components/CategoriesSection/CategoriesSection'
import { categories } from '../../stub/categories'
import { Banner } from './components/Banner'
import { AwardWinningSection } from './components/AwardWinningSection'
import { RestaurantsSection } from './components/RestaurantsSection'

const Spacing = styled.div`
  margin-bottom: 4.5rem;
`

export const HomePage = () => {
  return (
    <>
      <Banner />
      <Spacing />
      <RestaurantsSection title="Our favorite picks" />
      <Spacing />
      <AwardWinningSection />
      <Spacing />
      <CategoriesSection categories={categories} />
      <Spacing />
    </>
  )
}
