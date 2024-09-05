"use client"

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { name: 'Dashboard', path: '/dashboard' },
  { name: 'Patients', path: '/patients' },
  { name: 'Appointments', path: '/appointments' },
  { name: 'Staff', path: '/staff' },
  { name: 'Reports', path: '/reports' },
];

const SideNav: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-[#16c2d5] rounded-br-[40px] pt-20  rounded-tr-[40px]  text-white w-48 min-h-screen ">
      <ul>
        {navItems.map((item) => (
          <li key={item.name} className="mb-2">
            <Link
              href={item.path}
              className={`block p-3 rounded  ${
                pathname === item.path ? 'bg-[#0f70af]' : ''
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SideNav;
