"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuPositioner,
} from "@/components/ui/navigation-menu";

export default function Home() {
  return (
    <main className="relative min-h-screen">

      <header className="relative left-1/2 top-4 z-50 w-full max-w-6xl -translate-x-1/2 border border-white/20 bg-black/20 px-6 backdrop-blur-md">

        <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-6">

          {/* Logo */}
          <a
            href="/"
            className="text-2xl font-bold tracking-tight text-white"
          >
            TOSC<span className="font-normal">'26</span>
          </a>

          {/* Navigation */}
          <NavigationMenu>
            <NavigationMenuList className="flex items-center gap-2">

              {/* HOME */}
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/"
                  className="flex h-12 items-center px-5 text-lg font-medium text-white transition-colors hover:bg-white/10 hover:text-white"
                >
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* ABOUT */}
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/about"
                  className="flex h-12 items-center px-5 text-lg font-medium text-white transition-colors hover:bg-white/10 hover:text-white"
                >
                  About
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* REGISTER */}
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/register"
                  className="flex h-12 items-center px-5 text-lg font-medium text-white transition-colors hover:bg-white/10 hover:text-white"
                >
                  Register
                </NavigationMenuLink>
              </NavigationMenuItem>

            </NavigationMenuList>
          </NavigationMenu>

          {/* Login */}
          <a
            href="/login"
            className="border border-white/40 px-6 py-3 text-lg font-medium text-white transition hover:bg-white hover:text-black"
          >
            Login
          </a>

        </div>
      </header>

      {/* ================================================= */}
      {/* FIXED BACKGROUND VIDEO */}
      {/* ================================================= */}

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* ================================================= */}
      {/* HERO */}
      {/* ================================================= */}

      <section className="relative min-h-screen">
        <div className="flex min-h-screen items-center justify-center px-6 text-center text-white">

          <div className="max-w-4xl">

            <p className="mb-5 text-sm font-medium uppercase tracking-[0.4em]">
              Welcome to
            </p>

            <h1 className="text-7xl font-bold tracking-tight sm:text-8xl md:text-9xl">
              TOSC<span className="font-normal">'26</span>
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-lg text-white/80 md:text-xl">
              The Ultimate Competitive Examination for Students
            </p>

            <div className="mt-10 flex justify-center gap-3">

              <Button size="lg">
                Register Now
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-white/50 bg-transparent text-white hover:bg-white hover:text-black"
              >
                Learn More
              </Button>

            </div>

          </div>

        </div>
      </section>

      {/* ================================================= */}
      {/* ABOUT */}
      {/* ================================================= */}

      <section className="relative min-h-screen px-6 py-32">

        <div className="mx-auto max-w-6xl">

          <div className="rounded-lg bg-white/90 p-10 backdrop-blur-sm md:p-16">

            <p className="text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground">
              About TOSC
            </p>

            <h2 className="mt-6 text-5xl font-bold tracking-tight md:text-7xl">
              Think.
              <br />
              Question.
              <br />
              Compete.
            </h2>

            <p className="mt-10 max-w-3xl text-lg leading-8 text-muted-foreground">
              TOSC is designed to challenge students beyond conventional
              classroom learning. It encourages curiosity, logical thinking,
              problem solving and creative approaches to challenging questions.
            </p>

          </div>

        </div>
      </section>

      {/* ================================================= */}
      {/* FEATURES */}
      {/* ================================================= */}

      <section className="relative px-6 py-32">

        <div className="mx-auto max-w-6xl">

          <div className="mb-16 text-white">

            <p className="text-sm font-medium uppercase tracking-[0.3em] text-white/60">
              The Experience
            </p>

            <h2 className="mt-5 text-5xl font-bold md:text-7xl">
              Built to make
              <br />
              you think.
            </h2>

          </div>

          <div className="grid gap-6 md:grid-cols-3">

            <Card className="bg-white/90 backdrop-blur-sm">

              <CardHeader>
                <p className="text-sm text-muted-foreground">
                  01
                </p>

                <CardTitle className="text-2xl">
                  Curiosity
                </CardTitle>
              </CardHeader>

              <CardContent>
                Questions that make you stop, think and look at
                familiar concepts differently.
              </CardContent>

            </Card>

            <Card className="bg-white/90 backdrop-blur-sm">

              <CardHeader>
                <p className="text-sm text-muted-foreground">
                  02
                </p>

                <CardTitle className="text-2xl">
                  Creativity
                </CardTitle>
              </CardHeader>

              <CardContent>
                Problems that reward creative thinking rather than
                simple memorization.
              </CardContent>

            </Card>

            <Card className="bg-white/90 backdrop-blur-sm">

              <CardHeader>
                <p className="text-sm text-muted-foreground">
                  03
                </p>

                <CardTitle className="text-2xl">
                  Logic
                </CardTitle>
              </CardHeader>

              <CardContent>
                Develop the ability to break complex problems into
                understandable pieces.
              </CardContent>

            </Card>

          </div>

        </div>
      </section>

      {/* ================================================= */}
      {/* PARTICIPANTS */}
      {/* ================================================= */}

      <section className="relative min-h-screen px-6 py-32">

        <div className="mx-auto max-w-6xl">

          <div className="rounded-lg bg-white/90 p-10 backdrop-blur-sm md:p-16">

            <p className="text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground">
              Who Can Participate
            </p>

            <h2 className="mt-5 text-5xl font-bold md:text-7xl">
              For young minds.
            </h2>

            <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

              {[
                "Class 6",
                "Class 7",
                "Class 8",
                "Class 9",
                "Class 10",
                "Class 11",
              ].map((student) => (
                <Card key={student}>

                  <CardHeader>
                    <CardTitle>
                      {student}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="text-muted-foreground">
                    Ready to challenge yourself?
                  </CardContent>

                </Card>
              ))}

            </div>

          </div>

        </div>
      </section>

      {/* ================================================= */}
      {/* CTA */}
      {/* ================================================= */}

      <section className="relative min-h-screen">

        <div className="flex min-h-screen items-center justify-center px-6 text-center text-white">

          <div>

            <p className="text-sm uppercase tracking-[0.4em] text-white/60">
              Ready?
            </p>

            <h2 className="mt-6 text-6xl font-bold md:text-8xl">
              Take the
              <br />
              Challenge.
            </h2>

            <Button
              size="lg"
              className="mt-10"
            >
              Register for TOSC'26
            </Button>

          </div>

        </div>
      </section>

      {/* ================================================= */}
      {/* FOOTER */}
      {/* ================================================= */}

      <footer className="relative border-t border-white/20 bg-black/70 px-6 py-16 text-white backdrop-blur-sm">

        <div className="mx-auto max-w-6xl">

          <h2 className="text-4xl font-bold">
            TOSC<span className="font-normal">'26</span>
          </h2>

          <p className="mt-4 text-white/50">
            Think beyond the obvious.
          </p>

          <div className="mt-12 border-t border-white/10 pt-8 text-sm text-white/40">
            © 2026 TOSC. All rights reserved.
          </div>

        </div>

      </footer>

    </main>
  );
}