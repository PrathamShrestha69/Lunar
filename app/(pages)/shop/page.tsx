import ShopContent from '@/components/shop/ShopContent'
import ShopHero from '@/components/shop/ShopHero'
import React from 'react'

export default function page() {
  return (
   <div className="mt-20">
      <ShopHero />
      <ShopContent />
    </div>
  )
}
