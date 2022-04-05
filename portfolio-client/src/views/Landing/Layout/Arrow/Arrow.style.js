const styles = {
  arrow: (currentPage, landing) => ({
    transition: '1s ease-out',
    transform: currentPage !== landing ? 'translateY(-90vh)' : null
  })
}

export default styles