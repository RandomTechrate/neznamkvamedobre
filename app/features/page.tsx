"use client";

import React from "react";
import {
  Shield,
  Users,
  Zap,
  MessageSquare,
  Trophy,
  Gamepad,
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    name: "Secure Platform",
    description:
      "Advanced security measures to protect your gaming experience",
    icon: Shield,
  },
  {
    name: "Community Events",
    description: "Regular tournaments and events to bring players together",
    icon: Users,
  },
  {
    name: "Real-time Chat",
    description:
      "Connect with other gamers instantly through our chat system",
    icon: MessageSquare,
  },
  {
    name: "Fast Performance",
    description: "Optimized for speed and reliability across all devices",
    icon: Zap,
  },
  {
    name: "Competitive Rankings",
    description: "Track your progress and compete with other players",
    icon: Trophy,
  },
  {
    name: "Game Integration",
    description: "Seamless integration with your favorite games",
    icon: Gamepad,
  },
];

export default function Features() {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-black min-h-screen pb-24">
      {/* Navbar */}
      <nav className="w-full sticky top-0 z-10 backdrop-blur bg-black/30 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-white font-bold text-xl">IceMC.lol</h1>
          <div className="flex gap-4 text-gray-300 text-sm font-medium">
            <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
            <Link href="/profile" className="hover:text-blue-400 transition-colors">Profile</Link>
            <Link href="/features" className="hover:text-blue-400 transition-colors">Features</Link>
            <Link href="/contact" className="hover:text-blue-400 transition-colors">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Feature Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">
            Platform Features
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Everything you need for gaming
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Discover all the features that make IceMC.lol the perfect platform
            for gamers. From community events to competitive rankings, we've got
            you covered.
          </p>
        </div>

        <div className="mx-auto mt-20 max-w-2xl lg:max-w-none">
          <dl className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="flex flex-col border border-white/10 p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition duration-300 shadow-lg hover:shadow-xl"
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <feature.icon
                    className="h-6 w-6 text-blue-400"
                    aria-hidden="true"
                  />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex-auto text-base leading-7 text-gray-300">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
