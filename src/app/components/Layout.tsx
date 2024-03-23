"use client"
import { useState } from "react";
import Navbar from "./navbar/Navbar";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const [open, setOpen] = useState(false)

    return (
        <div className="flex" >
            <div className="fixed flex-none">
                <Navbar open={open} setOpen={setOpen} />
            </div>
            <div className={`duration-300 ${!open && "lg:ml-72 duration-300"}`}>
                {children}
            </div>
        </div>
    );
}
