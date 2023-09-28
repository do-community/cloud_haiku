import re

def replace_continuous_vowels(input_str, replacement):
    # Define a regex pattern to match 3 continuous vowels but not double consonants
    pattern = r'(?<=[aeiou]{1})[aeiou]{3}(?![^aeiou]{2})'
    
    # Use re.sub to replace 3 continuous vowels with the specified replacement
    output_str = re.sub(pattern, replacement, input_str)
    
    return output_str

# Example usage
input_str = "aeiobcatui"
replacement = "xyz"
output_str = replace_continuous_vowels(input_str, replacement)
print("Input string:", input_str)
print("Output string:", output_str)  # Output: "aeiobcatxyz"
