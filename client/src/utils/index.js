class AppUtil {
  clearObject (obj) {
    Object.keys(obj).forEach(key => {
      obj[key] = ''
    })
  }
}

export default new AppUtil()
