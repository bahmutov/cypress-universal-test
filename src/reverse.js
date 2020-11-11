function reverse(s) {
  return s ? s.split('').reverse().join('') : 'cannot reverse an empty value'
}
console.log(reverse('hello world'))
console.log(reverse())
