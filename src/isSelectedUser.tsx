const isSelectedUSer = (userModalUser: any, user: any) => userModalUser &&
  (
    (user.email + user.login.username) === (userModalUser.email + userModalUser.login.username)
  )

export default isSelectedUSer