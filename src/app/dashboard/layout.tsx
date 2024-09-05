import React from 'react';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="dashboard-layout">
      <header>
        {/* Add your dashboard header content here */}
        <h1>Dashboard</h1>
      </header>
      <nav>
        {/* Add your dashboard navigation here */}
      </nav>
      <main>{children}</main>
      <footer>
        {/* Add your dashboard footer content here */}
      </footer>
    </div>
  );
}
