"use client";

import React from "react";
import { signIn } from "next-auth/react";
import { Github, MessageCircle } from "lucide-react";

export default function SignIn() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
      <div className="bg-white/10 p-8 rounded-lg backdrop-blur-lg w-full max-w-md space-y-6">
        <h2 className="text-3xl font-bold text-center text-white mb-8">Sign In</h2>
        
        <div className="space-y-4">
          <button
            onClick={() => signIn("github", { callbackUrl: "/" })}
            className="w-full flex items-center justify-center gap-3 bg-gray-800 hover:bg-gray-700 text-white py-3 px-4 rounded-lg transition-colors"
          >
            <Github className="w-5 h-5" />
            Continue with GitHub
          </button>
          
          <button
            onClick={() => signIn("discord", { callbackUrl: "/" })}
            className="w-full flex items-center justify-center gap-3 bg-[#5865F2] hover:bg-[#4752C4] text-white py-3 px-4 rounded-lg transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            Continue with Discord
          </button>
        </div>
        
        <p className="text-sm text-gray-400 text-center mt-8">
          By signing in, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  );
} 