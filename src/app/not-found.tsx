import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import Header from "@/components/Header";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="grid flex-1 place-items-center px-5 py-40 text-center">
        <div>
          <p className="font-serif text-[9rem] leading-none text-terra italic sm:text-[12rem]">404</p>
          <h1 className="mt-2 font-serif text-4xl">This page wandered off.</h1>
          <p className="mx-auto mt-3 max-w-sm text-muted">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
          <Link
            href="/"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-paper hover:bg-terra"
          >
            <FiArrowLeft /> Back home
          </Link>
        </div>
      </main>
    </>
  );
}
