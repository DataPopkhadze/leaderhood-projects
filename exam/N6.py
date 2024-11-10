# 6) Convert Pascal Case string into snake_case (4 ქულა)

# You will receive a string which will contain words in PascalCase, your job is to convert them into snake_case.

# Examples:
# "TestController"  -->  "test_controller"
# "MoviesAndBooks"  -->  "movies_and_books"
# "App7 Test"        -->  "app7_test"
# 1                 -->  "1"


def pascal_to_snake(s):
    result = ""

    for char in s:
        if char.isupper() and result:
            result += "_"

        result += char.lower()

    return result

input_str = "PascalCaseSStrr"
output_str = pascal_to_snake(input_str)
print(output_str)
