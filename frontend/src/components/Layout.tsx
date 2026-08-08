import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-transparent text-stone-100">
      <header className="app-shell" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '1.5rem', paddingBottom: '1rem' }}>
        <a href="/" style={{ fontSize: '1.1rem', fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#f7f3eb' }}>
          Barber Flow
        </a>
        <nav style={{ display: 'flex', gap: '1rem', fontSize: '0.95rem', color: '#d6cfc4' }}>
          <a href="/" style={{ color: '#d6cfc4' }}>Home</a>
          <a href="/client" style={{ color: '#d6cfc4' }}>Book</a>
          <a href="/staff" style={{ color: '#d6cfc4' }}>Staff</a>
        </nav>
      </header>
      {children}
    </div>
  );
}
