import React from 'react'

const Btn = () => <button>click</button>

const Button = ({children}) => {
  return (
    <div>
        {children}
    </div>
  )
}


const BtnApp = () => {
    return (
      <Button><Btn/></Button>
    )
}
export default Button