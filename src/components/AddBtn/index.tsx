'use client'
import React, { useState } from 'react'
import Button from '../UI/Button'

function AddBtn() {
  const [added, setAdded] = useState(false)
  const buttonText = added ? 'Takvime eklendi' : 'Takvime ekle'

  return (
    <Button
      icon={added ? 'added' : 'add'}
      size={26}
      onClick={() => setAdded((prev) => !prev)}
    >
      {buttonText}
    </Button>
  )
}

export default AddBtn
