'use client'

import React, { FC, useEffect, useState } from 'react'
import Current from './Current';

interface Props {
  books: object | null;
}

const HomePage: FC<Props> = ({books}) => {  

  useEffect(() => {
    console.log('Hola')
    
  }, [books])

  return (
    <div className="">
      <Current />
    </div>
  )
}

export default HomePage