import React, { memo } from 'react'
import { FaPlus } from 'react-icons/fa'
const AddIcon = ({color,size}) => {
  return (
    
      <FaPlus color={color} size={size} />
    
  )
}

export default memo(AddIcon);