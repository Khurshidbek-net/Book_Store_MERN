import React from 'react'
import Banner from './Banner'
import TopSell from './TopSell'
import Recommended from './Recommended'
import News from './News'

const Home = () => {
  return (
    <>
      <Banner/>
      <TopSell/>
      <Recommended/>
      <News/>
    </>
  )
}

export default Home