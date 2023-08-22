def isIsoseles(x,y,z):
    return ((x == y and x != z) or (y == z and y != x) or (z == x and z != y))

print(isIsoseles(10,9,1))