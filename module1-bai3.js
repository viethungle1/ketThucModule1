function checkStr (str1, str2) {
    let index = str1.indexOf(str2);
    if (index==-1) {
        return false
    } else {
        return true
    }
}
console.log(checkStr(a,b))