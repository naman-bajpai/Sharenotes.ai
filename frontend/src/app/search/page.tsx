'use client'
import Navbar from '@/components/navbar';
import { FlipWords } from '@/components/ui/flip-words';
import { PlaceholdersAndVanishInput } from '@/components/ui/placeholders-and-vanish-input';
import React from 'react';


const Search = () => {
    const placeholders = [
        "Search for notes from top universities",
        "Search for notes using your class code",
        "Search for notes using the title?"
    ];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
    };
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("submitted");
    };
    return (
        <div>
            <Navbar />
            <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
                <div className="text-center mb-8">
                    <h1 className="text-5xl font-bold text-gray-800 dark:text-gray-200 mb-4">Search
                        <FlipWords words={['Uni', 'Notes']} /> <br />
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        A platform featuring notes curated from millions of students around the globe.
                    </p>
                </div>
                <div className="relative w-full max-w-lg">
                    <PlaceholdersAndVanishInput
                        placeholders={placeholders}
                        onChange={handleChange}
                        onSubmit={onSubmit}
                    />
                </div>
            </div>
        </div>
    );
};

export default Search;
