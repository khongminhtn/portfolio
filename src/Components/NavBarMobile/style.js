export const burgerStyle = {
  slice1:(color, toggled) => ({ 
    transform: toggled ? 'translateY(5px) rotate(-135deg)' : null,
    background: toggled ? 'white' : color
  }),

  slice2: (color, toggled) => ({ 
    transform: toggled ? 'translateY(-5px) rotate(135deg)' : null,
    background: toggled ? 'white' : color
  }),
}



export const navStyle = { left: 0 }