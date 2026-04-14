import { Outlet } from "react-router";
import Navigation from "./Navigation";

export default function Root() {
  return (
    <div className="relative min-h-screen bg-background text-foreground flex flex-col">
      <Navigation />
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="px-6 md:px-12 py-6 border-t border-border">
        <div className="max-w-[1800px] mx-auto">
          <p className="text-xs uppercase tracking-widest opacity-40">
            © 2026 The Grey Area. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
