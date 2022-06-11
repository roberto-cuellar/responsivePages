import React from 'react'
import { Footer } from '../components/footer/Footer'
import { Header } from '../components/header/Header'
import { Main } from '../components/main/Main'
import { Navbar } from '../components/navbar/Navbar'
import { SideBar } from '../components/sidebar/SideBar'

export const MainScreen = ({mode,setMode}) => {
  return (
   <>
      <Header setMode={setMode} mode={mode} />
      <Navbar />
      <Main />
      <SideBar />
      <Footer />
   </>
  )
}
