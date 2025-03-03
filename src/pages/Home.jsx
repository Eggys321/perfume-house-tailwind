import React from 'react'
import Products from '../features/Products'
import Cart from '../features/Cart'

const Home = () => {
  return (
    <>
  
    <main className='container mx-auto p-[25px] md:px-[15px] lg:py-[33px] lg:px-[99px] lg:grid grid-cols-3 gap-8 min-h-screen'>
       <section className='col-span-2'>
           <Products/>
       </section>

       <section className=''>
           <Cart/>
       </section>
    </main>
    </>
  )
}

export default Home