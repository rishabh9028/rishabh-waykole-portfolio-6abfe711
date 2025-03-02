
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import TestimonialsPage from "@/pages/TestimonialsPage";
import NotFound from "@/pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
