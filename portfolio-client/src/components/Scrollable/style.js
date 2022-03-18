export const animation = (translate, duration) => {
  return {
    transform: `translateY(-${translate}vh)`,
    transition: `${duration}ms ease-out`
  }
}