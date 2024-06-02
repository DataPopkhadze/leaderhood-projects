# The Hashtag Generator

def generate_hashtag(s):
    s = "#" + s.title()
    s = s.split(" ")
    s = "".join(s)
    
    if s == "#":
        return False
    
    if len(s) in range (1,140):
        return s
    else:
        return False