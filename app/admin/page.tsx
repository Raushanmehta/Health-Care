import React from "react";
import Link from "next/link";
import Image from "next/image";
import StartCard from "@/components/StartCard";
import { getRecentAppointmentList } from "@/lib/actions/appointment.actions";
import { DataTable } from "@/components/table/DataTable";
import {columns} from "@/components/table/columns";




const Admin = async() => {

  

 const  appointment = await getRecentAppointmentList() 

  return (
    <div className="mx-auto max-w-7xl flex-col space-y-14">
      <header className="admin-header">
        <Link href="/" className="cursor-pointer">
          <Image
            src="/assets/icons/medanta-logo.png"
            height={32}
            width={162}
            alt="Logo"
            className="h-8 w-fit "
          />
        </Link>
        <p className="text-16-semibold">Admin Dashboard</p>
      </header>

      <main className="admin-main">
        <section className="w-full space-y-4">
          <h1 className="header">Welcome </h1>
          <p className="text-dark-700">
            Start the day with managing new appointment
          </p>
        </section>

        <section className="admin-stat">
          <StartCard
            type="appointments"
            count={appointment.scheduledCount}
            lable="Schedule appointment"
            icon="/assets/icons/appointments.svg"
          />

          <StartCard
            type="pending"
            count={appointment.pendingCount}
            lable="Pending appointment"
            icon="/assets/icons/pending.svg"
          />

          <StartCard
            type="cancelled"
            count={appointment.cancelledCount}
            lable="Cancelled appointment"
            icon="/assets/icons/cancelled.svg"
          />
        </section>

        <DataTable columns={columns} data={appointment.document} />
        
      </main>
    </div>
  );
};

export default Admin;



// last seen 3:50