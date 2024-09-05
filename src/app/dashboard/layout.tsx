import React from 'react';
import SideNav from '@/components/ui/dashBoardLayoutComponemt/sideNav';

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
      <div className='flex'>
      <SideNav/>
      <main>{children}</main>

      </div>
      
      <footer>
        {/* Add your dashboard footer content here */}
      </footer>
    </div>
  );
}
