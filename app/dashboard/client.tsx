"use client";

import React from "react";
import { Session } from "next-auth";
import { Activity, Users, Settings } from "lucide-react";

export default function DashboardClient({ session }: { session: Session }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:text-center mb-16">
          <h2 className="text-3xl font-bold text-white">Welcome back, {session?.user?.name}</h2>
          <p className="mt-4 text-xl text-gray-300">Here's what's happening in your gaming world</p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Activity Card */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
            <div className="flex items-center">
              <Activity className="h-8 w-8 text-blue-400" />
              <h3 className="ml-3 text-xl font-medium text-white">Recent Activity</h3>
            </div>
            <div className="mt-4 space-y-4">
              <div className="text-gray-300">No recent activity</div>
            </div>
          </div>

          {/* Friends Card */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
            <div className="flex items-center">
              <Users className="h-8 w-8 text-blue-400" />
              <h3 className="ml-3 text-xl font-medium text-white">Friends Online</h3>
            </div>
            <div className="mt-4 space-y-4">
              <div className="text-gray-300">No friends online</div>
            </div>
          </div>

          {/* Settings Card */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
            <div className="flex items-center">
              <Settings className="h-8 w-8 text-blue-400" />
              <h3 className="ml-3 text-xl font-medium text-white">Settings</h3>
            </div>
            <div className="mt-4 space-y-4">
              <button className="text-gray-300 hover:text-white transition-colors">
                Manage Profile
              </button>
              <div className="block">
                <button className="text-gray-300 hover:text-white transition-colors">
                  Privacy Settings
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 