
/**
 * returns the querystring that should be appended to the url when fetching users
 * 
 * @param nationalities nationalities to include in the query string
 */

const nationalitiesToQueryString = (nationalities: string[]) => nationalities[0] ?
  nationalities.map((nationality, index) => nationalities.length === 1 ?
    `&nat=${nationality}` :
    (index === 0 ?
      `&nat=${nationality},` :
      (index === (nationalities.length - 1) ?
        `${nationality}` :
        (`${nationality},`)))
  ).join('') : ''

export default nationalitiesToQueryString