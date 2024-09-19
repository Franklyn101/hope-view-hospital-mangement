import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { BiSolidBellRing } from "react-icons/bi";
import Table from '@/components/ui/tableComponent/table';
import AvailableDoctors from '@/components/ui/availaibleDoctors/available-doctors';

const Home: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Hospital Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
        <Card className='bg-[#16c2d5]'>
          <CardHeader>
            <CardTitle className='text-white'>Hospital Earnings</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl text-white font-semibold">$78,666</p>
          </CardContent>
        </Card>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-8 gap-4">
        <Card className='bg-[#0f70af]'>
          <CardHeader>
            <CardTitle className='text-white'>Doctors</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl text-white font-semibold">234</p>
          </CardContent>
        </Card>
        <Card className='bg-[#0f70af]'>
          <CardHeader>
            <CardTitle className='text-white'>Nurses</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl text-white font-semibold">42</p>
          </CardContent>
        </Card>
        <Card className='bg-[#16c2d5] w-[36rem]'>
          <CardHeader className="flex ">
            <div className='flex justify-between'>
            <CardTitle className='text-white text-xl   '>Emergency Alert
            <BiSolidBellRing className='text-6xl' />
            </CardTitle>
             <div className='flex flex-col gap-2'>
           <Button className='text-[14px] font-bold w-30 text-white' variant={"box"}>Alert Reception</Button>
            <Button className='text-[14px] font-bold w-30 text-white' variant={"box"}>Alert Icu</Button>
            <Button className='text-[14px]  font-bold w-30 text-white' variant={"box"}>Alert Head Nurse</Button>
           </div>
            </div>
           
          
          </CardHeader>
          
        </Card>
      </div>
      <div className='flex gap-5 pt-10 w-full'>
        <div className='w-full'>
          <h1 className='font-semibold text-lg'>Upcoming Surgeries</h1>
        <Table/>
        </div>
       <div className='w-full'>
        <h1 className='font-semibold text-lg'>Available Doctors</h1>
       <AvailableDoctors/>
       </div>
      </div>
    </div>
  );
};

export default Home;
