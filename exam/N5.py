# 5) Palindrome Checker (3 ქულა)
# Create a program that checks if a given string is a palindrome (reads the same forward and backward). The function should ignore spaces, punctuation, and capitalization.
# Examples:
# "A man a plan a canal Panama" --> True
# "Hello" --> False

def is_palindrome(s):
    
    s = s.lower()
    
    clean_str = ""
    for char in s:
        if char.isalnum():
            clean_str += char

    return clean_str == clean_str[::-1]

input_string = input("Enter a string: ")

if is_palindrome(input_string):
    print("The string is a palindrome")

else:
    print("string isnt a palindrome")