
/**
 * 
 * Returns true if the two users can be taken granted as the same user
 * 
 * @param user1 the user to compare to the other user
 * @param user2 the user to compare to the other user
 */

const isSelectedUSer = (user1: IUserType, user2: IUserType) => user1 && user2 &&
  (
    (user2.email + user2.login.username) === (user1.email + user1.login.username)
  )

export default isSelectedUSer