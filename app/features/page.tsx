"use client";

import React from "react";
import { Shield, Users, Zap, MessageSquare, Trophy, Gamepad } from "lucide-react";

const features = [
  {
    name: "Secure Platform",
    description: "Advanced security measures to protect your gaming experience",
    icon: Shield,
  },
  {
    name: "Community Events",
    description: "Regular tournaments and events to bring players together",
    icon: Users,
  },
  {
    name: "Real-time Chat",
    description: "Connect with other gamers instantly through our chat system",
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
    <div className="bg-gradient-to-br from-gray-900 to-black min-h-screen py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Platform Features</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Everything you need for gaming
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Discover all the features that make Ice.lol the perfect platform for gamers.
            From community events to competitive rankings, we've got you covered.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <feature.icon className="h-5 w-5 flex-none text-blue-400" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
} 