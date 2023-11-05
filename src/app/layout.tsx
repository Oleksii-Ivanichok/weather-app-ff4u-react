'use client'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Cookies from "js-cookie";
import {useEffect} from "react";
import {router} from "next/client";
import {useRouter} from "next/navigation";

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter();

  const userAuthorized = Cookies.get("userAuthorized") === "true";

  useEffect(()=>{
    if(userAuthorized) {
      router.push('/dashboard');
    } else {
      router.push('/login');
    }
  })
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
