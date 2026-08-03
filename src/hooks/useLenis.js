// import { useEffect } from 'react';
// import Lenis from '@studio-freight/lenis';

// /**
//  * Initializes Lenis smooth scrolling for the whole app.
//  * Respects prefers-reduced-motion by skipping smoothing entirely.
//  */
// export function useLenis() {
//   useEffect(() => {
//     const prefersReducedMotion = window.matchMedia(
//       '(prefers-reduced-motion: reduce)'
//     ).matches;

//     if (prefersReducedMotion) return;

//     const lenis = new Lenis({
//       duration: 1.1,
//       easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
//       smoothWheel: true,
//     });

//     function raf(time) {
//       lenis.raf(time);
//       rafId = requestAnimationFrame(raf);
//     }

//     let rafId = requestAnimationFrame(raf);

//     return () => {
//       cancelAnimationFrame(rafId);
//       lenis.destroy();
//     };
//   }, []);
// }
