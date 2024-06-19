import Link from "next/link";
import Navbar from "@/components/navbar";
import styles from "./page.module.css";
import Hero from "./hero/Hero";
import { Collection } from "./collection/Collection";

export default function Home() {
    return (
        <main className={styles.main}>
            <Navbar />

            <div className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
            <Hero />
            </div>
        </main>
    );
}
