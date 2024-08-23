import clsx from "clsx";
import React from "react";
import Image from "next/image";

interface StartCardProps {
  type: "appointments" | "pending" | "cancelled";
  count: number;
  lable: string;
  icon: string;
}

const StartCard = ({ count = 0, lable, type, icon }: StartCardProps) => {
  return (
    <div
      className={clsx("stat-card", {
        "bg-appointments": type === "appointments",
        "bg-pending": type === "pending",
        "bg-cancelled": type === "cancelled",
      })}>
        <div className="flex items-center gap-4" >
          <Image
          src={icon}
          height={30}
          width={32}
          alt="lable"
          className="size-8 w-fit"
          />
          <h2 className="text-32-bold text-white">{count}</h2>
        </div>
        <p className="text-14-regular">{lable}</p>
    </div>
  );
};

export default StartCard;
