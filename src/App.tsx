/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { Problem } from './components/sections/Problem';
import { Solution } from './components/sections/Solution';
import { Value } from './components/sections/Value';
import { Playground } from './components/sections/Playground';
import { Automation } from './components/sections/Automation';
import { Plans } from './components/sections/Plans';
import { FAQ } from './components/sections/FAQ';
import { Footer } from './components/sections/Footer';
import { WhatsAppButton } from './components/ui/WhatsAppButon';

export default function App() {
  return (
    <div className="min-h-screen selection:bg-rose-gold-light selection:text-rose-gold">
      <Navbar />
      
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Value />
        <Playground />
        <Automation />
        <Plans />
        <FAQ />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
