const containerVariant = {
  hidden: {
    transition: {
      staggerChildren: 0.09,
    },
  },
  visible: {
    transition: {
      staggerChildren: 0.09,
    },
  },
};

const heroTextVariant = {
  hidden: {
    y: 300,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

const smallTextVariant = {
  hidden: {
    y: 100,
  },
  visible: {
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

const imageRevealVariant = {
  hidden: {
    scaleY: 1,
  },
  visible: {
    scaleY: 0,
  },
};

const imageWrapperVariants = {
  hidden: {
    scale: 1.5,
  },
  visible: {
    scale: 1,
  },
};
export {
  containerVariant,
  heroTextVariant,
  smallTextVariant,
  imageRevealVariant,
  imageWrapperVariants,
};
