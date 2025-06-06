"use client";

import React from "react";
import { Calendar, Users, Trophy } from "lucide-react";

const upcomingEvents = [
  {
    id: 1,
    title: "Weekly Tournament",
    date: "Next Saturday",
    description: "Join our weekly gaming tournament and compete for prizes!",
    type: "tournament",
  },
  {
    id: 2,
    title: "Community Meetup",
    date: "Next Wednesday",
    description: "Virtual meetup to discuss upcoming features and games.",
    type: "meetup",
  },
  {
    id: 3,
    title: "Game Night",
    date: "Friday",
    description: "Casual gaming night with the community. All skill levels welcome!",
    type: "social",
  },
];

const topMembers = [
  {
    id: 1,
    name: "GamerPro123",
    role: "Community Leader",
    contributions: 156,
  },
  {
    id: 2,
    name: "IceQueen",
    role: "Event Organizer",
    contributions: 142,
  },
  {
    id: 3,
    name: "SpeedRunner",
    role: "Tournament Champion",
    contributions: 128,
  },
];

export default function Community() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Our Community</h1>
          <p className="text-xl text-gray-300">
            Join our vibrant community of gamers and make new friends!
          </p>
        </div>

        {/* Events Section */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <Calendar className="h-6 w-6 text-blue-400 mr-2" />
            <h2 className="text-2xl font-bold text-white">Upcoming Events</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white/10 backdrop-blur-lg rounded-lg p-6 hover:bg-white/20 transition-colors"
              >
                <h3 className="text-xl font-semibold text-white mb-2">{event.title}</h3>
                <p className="text-blue-400 mb-4">{event.date}</p>
                <p className="text-gray-300">{event.description}</p>
                <button className="mt-4 text-blue-400 hover:text-blue-300 font-medium">
                  Learn more →
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Top Members Section */}
        <div>
          <div className="flex items-center mb-8">
            <Trophy className="h-6 w-6 text-blue-400 mr-2" />
            <h2 className="text-2xl font-bold text-white">Top Contributors</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {topMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white/10 backdrop-blur-lg rounded-lg p-6 flex items-center space-x-4"
              >
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white">{member.name}</h3>
                  <p className="text-blue-400">{member.role}</p>
                  <p className="text-sm text-gray-300">{member.contributions} contributions</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 