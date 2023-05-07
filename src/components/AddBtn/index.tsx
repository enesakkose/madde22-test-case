'use client'
import React, { useState } from 'react'
import Button from '../UI/Button'

function AddBtn({id}: { id: number }) {
  const [added, setAdded] = useState(false)
  const buttonText = added ? 'Takvime eklendi' : 'Takvime ekle'
  const handleAdd = () => {
    setAdded((prev) => !prev)
    localStorage.setItem('events', JSON.stringify(id))
  }
  return (
    <Button
      icon={added ? 'added' : 'add'}
      size={26}
      onClick={handleAdd}
    >
      {buttonText}
    </Button>
  )
}

export default AddBtn
