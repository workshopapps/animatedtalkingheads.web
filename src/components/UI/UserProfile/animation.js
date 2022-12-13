export const menuAnimate = {
  enter: {
    opacity: 1,
    //rotateX: 0,
    transition: {
      duration: 0.4,
      staggerChildren: 0.2,
      staggerDirection: 1
    },
    display: 'block'
  },
  exit: {
    opacity: 0,
    //rotateX: -15,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
      staggerDirection: -1
    },
    transitionEnd: {
      display: 'none'
    }
  }
};
