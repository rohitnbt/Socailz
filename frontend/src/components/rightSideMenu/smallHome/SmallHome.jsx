import React from 'react'
import { SmallSlider } from '../../smallSlider/SmallSlider'

export const SmallHome = () => {
  return (
    <div className='SmallHome'>
        <SmallSlider title="Follow" />
        <SmallSlider title="Latest Pictures" />
        <SmallSlider title="Latest Videos" />
    </div>
  )
}
