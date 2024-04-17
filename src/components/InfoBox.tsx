'use client'

import React, { PropsWithChildren, useState } from 'react'

export const InfoBox = ({ children }: PropsWithChildren) => {
  const [isClosed, setIsClosed] = useState(false)

  return (
    <div className="infoBoxContainer">
      <div className="infoBox" style={{ display: isClosed ? 'none' : 'flex' }}>
        <div className="infoBox__content">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style={{ width: '24px', height: '24px' }}>
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4" />
            <path d="M12 8h.01" />
          </svg>
          {children}
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" onClick={() => setIsClosed(!isClosed)}>
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      </div>
    </div>
  )
}
