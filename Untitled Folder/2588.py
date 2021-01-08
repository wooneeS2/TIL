a  = int(input())
b  = int(input())

###a=472
###b=385


result1= a*(b%10)
print(result1)

result2=a*((b%100)//10)
print(result2)

result3=a*(b//100)
print(result3)

print( result1+(result2*10)+(result3*100))