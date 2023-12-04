import React from 'react'
import {Helmet} from "react-helmet";

const Meta = ({title}) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <link rel='shortcut icon' href='favicon icon' type='image/x-icon' />    
      </Helmet>
    </>
  )
}

export default Meta
