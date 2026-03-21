import React from 'react'
import { Button } from './ui/button'

const FormActions = () => {
  return (
      <div className='flex flex-row '>
        <Button variant="ghost">Cancel</Button>
        <Button variant="default">Create</Button>
      </div>
  )
}

export default FormActions