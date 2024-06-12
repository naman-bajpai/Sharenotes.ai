import Image from "next/image";
import Link from "next/link";
import { NavbarDemo } from "../components/navbar";
import { BackgroundBoxesDemo } from "../app/landing/landing";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="">Welcome to ShareNotes.ai</h1>
      <BackgroundBoxesDemo/>
      <NavbarDemo />
      <Link href="/login">Login</Link>
      <Link href="/signup">Signup</Link>
    </main>
  );
}