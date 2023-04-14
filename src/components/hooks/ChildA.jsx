import React, { memo } from 'react'

const ChildA = ({Learning}) => {

    console.log("Child Component");
    console.log(Learning);
    
  return (
    <div>ChildA</div>
  )
}

export default memo(ChildA)