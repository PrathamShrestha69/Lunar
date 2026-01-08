import ShopContent from '@/components/shop/ShopContent'
import ShopHero from '@/components/shop/ShopHero'
import React from 'react'

export default function page() {
  return (
   <div className='pt-15'>
      <ShopHero />
      <ShopContent />
    </div>
  )
}
