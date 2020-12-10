import React from 'react'
export const Button = ({ onClick, title, style }) => {
  return (
    <button
      style={{
        ...style,
        backgroundColor: '#abcdef',
        borderRadius: '5px',
        height: '30px',
        width: '200px',
        marginLeft: 10,
      }}
      type={'button'}
      onClick={onClick}
    >
      {title}
    </button>
  )
}