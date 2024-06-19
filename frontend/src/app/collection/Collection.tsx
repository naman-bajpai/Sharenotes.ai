import { HoverEffect } from "@/components/ui/card-hover-effect";
import React from "react";


export function Collection() {
  return (
    <div className="max-w-5xl mx-5 px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Search",
    description:
      "Access notes from the top Universities in the world.",
    link: "https://stripe.com",
  },
  {
    title: "Post",
    description:
      "Post notes from your classes and share them with your friends.",
    link: "https://netflix.com",
  },
  {
    title: "Sort",
    description:
      "Sort notes based on universities, classes, and subjects.",
    link: "https://google.com",
  }
];
