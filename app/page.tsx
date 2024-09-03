import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <p className=" font-bold text-emerald-600"> AttendEase Main Page</p>
     <Link href="/users" className=" underline">Click Here to Go to the Users Page</Link>
    </main>
  );
}
