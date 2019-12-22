const nationalitiesToQueryString = (nationalities: string[]) => nationalities[0] ?
  nationalities.map((nationality, index) => {
    if (index === 0 && index === (nationalities.length - 1)) {
      return `&nat=${nationality}`
    }
    if (index === 0) {
      return `&nat=${nationality},`
    }
    if (index === (nationalities.length - 1)) {
      return `${nationality}`
    }
    return `${nationality},`
  }).join('') : ''

export default nationalitiesToQueryString