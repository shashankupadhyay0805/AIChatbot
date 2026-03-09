"use client";

import { Button } from "@/components/ui/button";
import {
  Book,
  BookMarked,
  BookText,
  DollarSign,
  Github,
  LinkIcon,
  MessageSquare,
  NotebookPen,
  PenLine,
  ShieldCheck,
  SquarePen,
  Sun,
  Moon,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function DemoPage() {
  const [isDark, setIsDark] = useState(false);

  // initialize theme from localStorage or system preference
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark") {
      setIsDark(true);
    } else if (stored === null) {
      // respect system preference when no explicit choice
      const prefersDark =
        window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDark(prefersDark);
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="text-xl font-semibold">Chatbot Demo</div>
            <div className="flex flex-row items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsDark(!isDark)}
                title="Toggle color mode"
              >
                {isDark ? <Sun /> : <Moon />}
              </Button>

              <Button variant="ghost" asChild>
                <Link
                  href="https://github.com/shashankupadhyay0805"
                  target="_blank"
                >
                  Github <Github />
                </Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link
                  href="https://rryyqn.com/projects/ai-chatbot"
                  target="_blank"
                >
                  See Blog <BookText />
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Open Source AI Chatbot Template
          </h1>
          <p className="text-primary mb-8 max-w-2xl mx-auto text-pretty">
            Open the chatbot in the bottom-right to start a conversation
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Key Features
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-18 h-18 bg-primary/5 mx-auto rounded-lg my-2 justify-center flex items-center">
                <ShieldCheck className=" size-10" strokeWidth={1} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Arcjet Protected</h3>
              <p className="text-muted-foreground">
                Rate limiting and bot protection
              </p>
            </div>
            <div className="text-center">
              <div className="w-18 h-18 bg-primary/5 mx-auto rounded-lg my-2 justify-center flex items-center">
                <DollarSign className="size-10" strokeWidth={1} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Free AI Models</h3>
              <p className="text-muted-foreground">
                Built with Gemini AI&apos;s generous free tier
              </p>
            </div>
            <div className="text-center">
              <div className="w-18 h-18 bg-primary/5 mx-auto rounded-lg my-2 justify-center flex items-center">
                <BookText className="size-10" strokeWidth={1} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart Training</h3>
              <p className="text-muted-foreground">
                Customize your chatbot&apos;s responses
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-2 my-20">
        <div className="container mx-auto px-4 text-center bg-gradient-to-bl from-primary/90 to-black py-20 rounded-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-foreground">
            Get The Template
          </h2>
          <p className="text-ring mb-4 mx-auto">
            Docs and instructions are in the GitHub repository. Give it a star
            while you&apos;re at it ;&#41;
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="">
        <div className="container mx-auto px-4">
          <div className="py-8 text-center text-sm text-muted-foreground">
            Made with ❤️ by Shashank
          </div>
        </div>
      </footer>
    </div>
  );
}
