import React from 'react'

const Loading = () => {
  return (
    <div className='new-things'>
    <div className="flex items-center justify-center h-screen bg-sky-300 overflow-hidden">
    <div className="relative w-[75px] h-[100px]">
      {/* Loader bars */}
      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          className={`absolute bottom-0 w-[10px] bg-dark-500 shadow-md transform origin-bottom animate-barUp${index + 1}`}
          style={{
            left: `${index * 15}px`,
            height: index === 0 ? '10%' : `${(index + 1) * 10}%`,
          }}
        ></div>
      ))}
      {/* Loader ball */}
      <div className="absolute bottom-2 left-0 w-[10px] h-[10px] bg-white rounded-full animate-ball"></div>
    </div>
  </div>
  </div>
  )
}

export default Loading