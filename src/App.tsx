import type { Component } from 'solid-js';
import { Route, Routes } from "@solidjs/router";
import Home from './Pages/Home';
import Price from './Pages/Price';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Services from './Pages/Services';
import Blog from './Pages/Blog';
import Taxi from './Pages/Taxi';

const App: Component = () => {
  return (
    <Routes>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/blog" component={Blog} />
      <Route path="/taxi" component={Taxi} />
      <Route path="/price" component={Price} />
      <Route path="/contact" component={Contact} /> {/* 👈 Define the home page route */}
       {/* 👈 Define the home page route */}
    </Routes>
  );
};

export default App;
