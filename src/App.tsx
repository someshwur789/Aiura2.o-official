import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Technical from "./pages/Technical";
import NonTechnical from "./pages/NonTechnical";
import EventRules from "./pages/EventRules";
import NotFound from "./pages/NotFound";
import SplineScene from "./components/SplineScene";
import AudioPlayer from "./components/AudioPlayer"; // ✅ added

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <SplineScene />
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/technical" element={<Technical />} />
          <Route path="/non-technical" element={<NonTechnical />} />
          <Route path="/event-rules/:eventId" element={<EventRules />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <AudioPlayer /> {/* ✅ Background music player */}
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
