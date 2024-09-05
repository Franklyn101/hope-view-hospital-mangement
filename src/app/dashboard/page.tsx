import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Home: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Hospital Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className='bg-[#0f70af]'>
          <CardHeader>
            <CardTitle className='text-white'>Total Patients</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl text-white font-semibold">1,234</p>
          </CardContent>
        </Card>
        <Card className='bg-[#0f70af]'>
          <CardHeader>
            <CardTitle className='text-white'>Available Beds</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl text-white font-semibold">42</p>
          </CardContent>
        </Card>
        <Card className='bg-[#0f70af]'>
          <CardHeader>
            <CardTitle className='text-white'>Scheduled Appointments</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl text-white font-semibold">78</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Home;
