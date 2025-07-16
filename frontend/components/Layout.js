// frontend/components/Layout.js
import React, { useState } from 'react'

const tabs = ['Disk Manager', 'VM Manager', 'Docker Manager']

export default function Layout({ children }) {
  const [active, setActive] = useState(tabs[0])

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="nav-tabs p-4">
        {tabs.map(tab => (
          <span
            key={tab}
            onClick={() => setActive(tab)}
            className={`nav-tab mr-4 ${
              active === tab ? 'nav-tab-active' : ''
            }`}
          >
            {tab}
          </span>
        ))}
      </nav>

      {/* Content */}
      <main className="flex-1 p-6 overflow-auto">
        {React.cloneElement(children, { activeTab: active })}
      </main>
    </div>
  )
}
