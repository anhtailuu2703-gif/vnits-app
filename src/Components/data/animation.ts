// animation.ts

import type { Variants } from "framer-motion/dom";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 80 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.8,
    },
  }),
};

export const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -80,
  },

  show: {
    opacity: 1,
    x: 0,
  },
};

export const fadeRight = {
  hidden: {
    opacity: 0,
    x: 80,
  },

  show: {
    opacity: 1,
    x: 0,
  },
};

export const zoomIn = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },

  show: {
    opacity: 1,
    scale: 1,
  },
};

export const stagger = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};