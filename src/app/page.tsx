import React from 'react'
import Hero from './components/Hero'
import Editors from './components/Editors'
import Products from './components/Products'
import ShopHero from './components/ShopHero'
import Poster from './components/poster'

function page() {
  return (
    <>
      <Hero />
      <Editors />
      <Products />
      <ShopHero />
      <Poster />
    </>
  )
}

export default page