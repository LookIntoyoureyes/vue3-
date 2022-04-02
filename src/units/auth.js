const getToken = (token) => {
  let name = token + '='
  let allCoookie = document.cookie.split(';')
  for (let i = 0; i < allCoookie.length; i++) {
    let coocik = allCoookie[i]
    while (coocik.charAt(0) == " ") coocik = coocik.substring(1)
    if (coocik.indexOf(name) > -1) {
      return coocik.substring(name.length, coocik.length)
    }
  }
}

const setToken = (name, token) => {
  document.cookie = name + '=' + token
}

export {
  getToken,
  setToken
}