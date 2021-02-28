module.exports = function check(str, bracketsConfig) {
  let newBracketsConfig = bracketsConfig.flatMap(element => element.join(''))

    for (let i = 0; i < newBracketsConfig.length; i++) {
        if (str.includes(newBracketsConfig[i])) {
            str = str.replace(newBracketsConfig[i], '')
            i--
        }
    }

    return str === ''
}
