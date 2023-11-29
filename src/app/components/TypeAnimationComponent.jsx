import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const TypeAnimationComponent = () => {
  return (
    <TypeAnimation
      sequence={[
        'Rui Meireles',
        1000,
        'Web Developer',
        1000,
        'UI/UX Designer',
        1000,
        'Ready to work!',
        1000,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
  )
}

export default TypeAnimationComponent
