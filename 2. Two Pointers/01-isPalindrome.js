/*
Given a string s, determine whether it is a palindrome. A palindrome reads the same forward and backward.
Ignore spaces, punctuation, and capitalization if there's any
Example: 
"A man, a plan, a canal: Panama" -> true
"hello" -> false
"madam" -> true
*/

function isPalindrome(s) {
    let left = 0
    let right = s.length - 1

    while (left < right) {

        while (left < right && !isAlphaNumeric(s[left])) {
            left++
        }

        while (left < right && !isAlphaNumeric(s[right])) {
            right--
        }

        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false
        }

        left++
        right--
    }

    return true
}