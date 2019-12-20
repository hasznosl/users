
const randomString = () => Math.random().toString(16).substring(2, 15)


const get = (pageNr: number, searchTerm: string): Promise<string> => new Promise((resolve, reject) => {
  setTimeout(() => {

    const randomUser = () => `{
      "gender": "${Math.random() > 0.5 ? "female" : "male"}",
      "name": { "title": "miss", "first": "${randomString()}", "last": "${randomString()}" },
      "location": { "street": "2286 frances ct", "city": "townsville", "state": "queensland", "postcode": 6699 },
      "email": "${randomString()}@${randomString()}.com",
      "login": { "username": "${randomString()}", "password": "salvador", "salt": "NgEKDglD", "md5": "8946b15e0a5411bfdb52df5ac1b90520", "sha1": "f460f12a714919499d413a69a76ca2f262e9c198",
      "sha256": "fbb37b276b0900fcfdcfc47f0584f9859726c3791b9b0e453dbac8178be26412" }, 
      "dob": "1977–05–01 13:29:43", "registered": "2009–05–12 00:46:03", 
      "phone": "08–4889–2804", "cell": "0479–076–830", "id": { "name": "TFN", "value": "212902602" },
      "picture": { "large": "https://randomuser.me/api/portraits/women/90.jpg",
      "medium": "https://randomuser.me/api/portraits/med/women/90.jpg", 
      "thumbnail": "https://randomuser.me/api/portraits/thumb/women/90.jpg" }, "nat": "AU" }`
    const usersArray = `[${new Array(50).fill(1).map(_ => randomUser()).join(', ')}]`

    const response = `{"results": ${usersArray},"info": {"seed": "7d4db9727474515a","results": 1,"page": 1,"version": "1.1"}}`
    resolve(
      response
    )
  }, 2000 + Math.random() * 1000)
})

export default get