# Remove Duplicates from a List 
# Create a program that receives a list and removes duplicate elements while maintaining the original order.
# # test cases: Examples:
# [1, 2, 2, 3, 4, 4, 5] --> [1, 2, 3, 4, 5]
# ['a', 'b', 'a', 'c'] --> ['a', 'b', 'c']

input_lst = input("Enter elements of the list separated by spaces: ").split()

unique_list = []

for item in input_lst:
    if item not in unique_list:
        unique_list.append(item)

print("List with duplicates removed:", unique_list)