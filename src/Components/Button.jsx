import React from 'react'

const Button = ({title, id, rightIcon, leftIcon, containerClass}) => {
  return (
    <div>
      <button id={id}
      className={`group relative z-10 w-fit cursor-pointer
      pverflow-hidden rounded-full bg-voilet-50
      px-7 py-3 text-black ${containerClass}`}>
        {leftIcon}

        <span className='relative inline-flex 
        overflow-hidden font-general text-xs uppercase'>
            <div>
                {title}
            </div>
        </span>

        {rightIcon}
      </button>
    </div>
  )
}

export default Button
