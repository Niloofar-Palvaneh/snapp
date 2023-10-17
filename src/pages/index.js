import Des from '@/components/des/Des'
import Header from '@/components/header/Header'
import LoginDes from '@/components/loginDes/LoginDes'
import Navbar from '@/components/navbar/Navbar'
import Needs from '@/components/needs/Needs'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Needs />
      <Des />
      <LoginDes/>
    </>
  )
}
