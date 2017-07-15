Python 3.6.1 (v3.6.1:69c0db5050, Mar 21 2017, 01:21:04) 
[GCC 4.2.1 (Apple Inc. build 5666) (dot 3)] on darwin
Type "copyright", "credits" or "license()" for more information.
>>> varName = 12
>>> age = 14
>>> age
14
>>> age = 15
>>> age
15
>>> person1 = "Abby"
>>> person2 = "James"
>>> person1, person2,person3 = "Abby", "James", "Lebron"
>>> person1
'Abby'
>>> person2
'James'
>>> person3
'Lebron'
>>> var1=var2=var3="Apples"
>>> age1 = 14
>>> age2 = 40
>>> age3 = age1 + age2
>>> age3
54
>>> age1/age2
0.35
>>> age1*age2
560
>>> age1%age2
14
>>> myName = "Patrick"
>>> firstName = "Pat"
>>> lastName = "Akpala"
>>> fullName = firstname + lastname
Traceback (most recent call last):
  File "<pyshell#22>", line 1, in <module>
    fullName = firstname + lastname
NameError: name 'firstname' is not defined
>>> fullname = firstName + lastName
>>> print fullname
SyntaxError: Missing parentheses in call to 'print'
>>> print (fullName)
Traceback (most recent call last):
  File "<pyshell#25>", line 1, in <module>
    print (fullName)
NameError: name 'fullName' is not defined
>>> print(fullname)
PatAkpala
>>> random = "Avinash ggigigigigigigigiigg"
>>> random[10]
'i'
>>> random[10-1]
'g'
>>> random[0:3]
'Avi'
>>> random[0:7]
'Avinash'
>>> shoppingList = ['eggs', 'carrots', 'milk', 'cherries', 'apples']
>>> shoppingList[2]
'milk'
>>> shoppingList[2] = 'chocolate'
>>> shoppingList[2]
'chocolate'
>>> del shoppingList[4]
>>> shoppingList
['eggs', 'carrots', 'chocolate', 'cherries']
>>> array1=[23,54,64]
>>> array2=[43,23]
>>> array3 = array1 + array2
>>> array3
[23, 54, 64, 43, 23]
>>> len(shoppingList)
4
>>> numArray = [36,75,10004, 1, -5]
>>> max(numArray)
10004
>>> min(numArray)
-5
>>> shoppingList.append('Brocolli')
>>> shoppingList
['eggs', 'carrots', 'chocolate', 'cherries', 'Brocolli']
>>> shoppingList.count('chocolate')
1
>>> shoppingList.append('eggs')
>>> shoppingList.count('eggs')
2
>>> shoppingList[len(shoppingList)-1]
'eggs'
>>> del shoppingList[len(shoppingList)-1]
>>> shoppingList
['eggs', 'carrots', 'chocolate', 'cherries', 'Brocolli']
>>> students = ["Eric", 14, "Bob",12, "Tina",26, "Chris",15]
>>> students = {"Eric": 14, "Bob":12, "Tina":26, "Chris":15}
>>> students.values
<built-in method values of dict object at 0x10597dee8>
>>> students.values()
dict_values([14, 12, 26, 15])
>>> students["Bob"]
12
>>> len(students.values())
4
>>> students["Bob"] = 13
>>> students["Bob"]
13
>>> del students["Bob"]
>>> students
{'Eric': 14, 'Tina': 26, 'Chris': 15}
>>> students["eric"]
Traceback (most recent call last):
  File "<pyshell#64>", line 1, in <module>
    students["eric"]
KeyError: 'eric'
>>> students.keys
<built-in method keys of dict object at 0x10597dee8>
>>> student.keys()
Traceback (most recent call last):
  File "<pyshell#66>", line 1, in <module>
    student.keys()
NameError: name 'student' is not defined
>>> students.keys()
dict_keys(['Eric', 'Tina', 'Chris'])
>>> students.get()
Traceback (most recent call last):
  File "<pyshell#68>", line 1, in <module>
    students.get()
TypeError: get expected at least 1 arguments, got 0
>>> students.get('Eric')
14
>>> student.clear()
Traceback (most recent call last):
  File "<pyshell#70>", line 1, in <module>
    student.clear()
NameError: name 'student' is not defined
>>> students.clear()
>>> students
{}
>>> del students
>>> students
Traceback (most recent call last):
  File "<pyshell#74>", line 1, in <module>
    students
NameError: name 'students' is not defined
>>> students = {"Jobs":15,"Marc":24, "Avi":14}
>>> students2 = {"patrick":31,"Demee":33 }
>>> students.update(students2)
>>> students
{'Jobs': 15, 'Marc': 24, 'Avi': 14, 'patrick': 31, 'Demee': 33}
>>> tup1 = ("Maths", 23, "Dogs")
>>> tup1.count()
Traceback (most recent call last):
  File "<pyshell#80>", line 1, in <module>
    tup1.count()
TypeError: count() takes exactly one argument (0 given)
>>> tup1.count("Dogs")
1
>>> tup1 = ("Cheese")
>>> tup1
'Cheese'
>>> tup1 = ("Maths", 23, "Dogs")
>>> tup1[0]
'Maths'
>>> tupi[0:2]
Traceback (most recent call last):
  File "<pyshell#86>", line 1, in <module>
    tupi[0:2]
NameError: name 'tupi' is not defined
>>> tup1[0:2]
('Maths', 23)
>>> tup1[0:3]
('Maths', 23, 'Dogs')
>>> del tup1
>>> tup1
Traceback (most recent call last):
  File "<pyshell#90>", line 1, in <module>
    tup1
NameError: name 'tup1' is not defined
>>> shoppingList = [1,2,3]
>>> shoppingList.append(4)
>>> shoppingList
[1, 2, 3, 4]
>>> del shoppingList
>>> shoppingList
Traceback (most recent call last):
  File "<pyshell#95>", line 1, in <module>
    shoppingList
NameError: name 'shoppingList' is not defined
>>> shoppingList = [1,2,3,4,5]
>>> shoppingList.pop(len(shoppingList)-1)
5
>>> shoppingList
[1, 2, 3, 4]
>>> shoppingList.pop()
4
>>> shoppingList.pop(1)
2
>>> shoppingList
[1, 3]
>>> shoppingList.reverse()
>>> shoppingList
[3, 1]
>>> shoppingList.sort()
>>> shoppingList
[1, 3]
>>> shoppingList.sort(key="asc", reverse=false)
Traceback (most recent call last):
  File "<pyshell#106>", line 1, in <module>
    shoppingList.sort(key="asc", reverse=false)
NameError: name 'false' is not defined
>>> students
{'Jobs': 15, 'Marc': 24, 'Avi': 14, 'patrick': 31, 'Demee': 33}
>>> students.update({"greg": 12})
>>> students
{'Jobs': 15, 'Marc': 24, 'Avi': 14, 'patrick': 31, 'Demee': 33, 'greg': 12}
>>> clear
Traceback (most recent call last):
  File "<pyshell#110>", line 1, in <module>
    clear
NameError: name 'clear' is not defined
>>> favSongs = ["put it on the alter", "praise on the inside", "everything"]
>>> favMovies = ["American gangaster", "The God Father", "Pulp Fiction"]
>>> favMediaList = favSongs + favMovies
>>> favMediaList
['put it on the alter', 'praise on the inside', 'everything', 'American gangaster', 'The God Father', 'Pulp Fiction']
>>> favMediaList.append("Harry Porter")
>>> favMediaList
['put it on the alter', 'praise on the inside', 'everything', 'American gangaster', 'The God Father', 'Pulp Fiction', 'Harry Porter']
>>> totalPeople = 20
>>> remainder = totalpeople - 10 + 3 + 15 - 5
Traceback (most recent call last):
  File "<pyshell#118>", line 1, in <module>
    remainder = totalpeople - 10 + 3 + 15 - 5
NameError: name 'totalpeople' is not defined
>>> remainder = totalPeople - 10 + 3 + 15 - 5
>>> remainder
23
>>> remainder + (3*15)
68
>>> firstName = inpute("Enter First Name")
Traceback (most recent call last):
  File "<pyshell#122>", line 1, in <module>
    firstName = inpute("Enter First Name")
NameError: name 'inpute' is not defined
>>> firstName = input("Enter First Name")
Enter First Name patrick
>>> firstName
' patrick'
>>> lastName = input("Enter Last Name")
Enter Last Name Akpala
>>> fullname = firstName + lastName
>>> greeting = ("Hello there, %s %s")
>>> print(greeting%(firstName, lastName))
Hello there,  patrick  Akpala
>>> if 5 > 2:
	print("My name is BOB")

	
My name is BOB
>>>  if 5 > 2:
	print("My name is BOB")
	
SyntaxError: unexpected indent
>>> if 5 > 2:print("My name is BOB")

My name is BOB
>>> if 5 > 2:
	print("My name is Bob")
	else:
		
SyntaxError: invalid syntax
>>> if 5 > 2:
	print("My name is Bob")
else:
	print("the earth has collapsed")

	
My name is Bob
>>> if 5<2:
	print("My name is Bob")
else:
	print("The earth has collpased")

	
The earth has collpased
>>> if 5<2:
	print("My name is Bob")
else if 2 < 5:
	print("The earth has collpased")
else:
	
SyntaxError: invalid syntax
>>> if 5 == 5
SyntaxError: invalid syntax
>>> if 5 == 5:
	print true
	
SyntaxError: Missing parentheses in call to 'print'
>>> if 4 != 5:
	print ("hello")

	
hello
>>> age = 15
>>> if age <= 13:
	print("you are eligible to register")
	if(age > 13)
	
SyntaxError: invalid syntax
>>> day = "Friday"
>>> if day == "monday"
SyntaxError: invalid syntax
>>> if day == "monday":
	print("Sunny")
elif day == "Tuesday":
	print("Cloudy")
else: print("Rainy")

Rainy
>>> if day != '' and day == "Friday":
	print('Sunny with a bit of Clouds')

	
Sunny with a bit of Clouds
>>> day = "Saturday"
>>> if day != '' or day == "Friday":
	print('Sunny with a bit of Clouds')

	
Sunny with a bit of Clouds
>>> for i in range(0,5):
	print(i)

	
0
1
2
3
4
>>> shoppingList
[1, 3]
>>> shoppingList.clear()
>>> shoppingList
[]
>>> shoppingList.append('Milk', 'Eggs', 'Oranges')
Traceback (most recent call last):
  File "<pyshell#180>", line 1, in <module>
    shoppingList.append('Milk', 'Eggs', 'Oranges')
TypeError: append() takes exactly one argument (3 given)
>>> shoppingList.update('Milk', 'Eggs', 'Oranges')
Traceback (most recent call last):
  File "<pyshell#181>", line 1, in <module>
    shoppingList.update('Milk', 'Eggs', 'Oranges')
AttributeError: 'list' object has no attribute 'update'
>>> shoppingList.update(['Milk', 'Eggs', 'Oranges'])
Traceback (most recent call last):
  File "<pyshell#182>", line 1, in <module>
    shoppingList.update(['Milk', 'Eggs', 'Oranges'])
AttributeError: 'list' object has no attribute 'update'
>>> shoppingList = ['Milk', 'Eggs', 'Oranges']
>>> shoppingList
['Milk', 'Eggs', 'Oranges']
>>> for i in shoppingList:
	print(shoppingList[i])

	
Traceback (most recent call last):
  File "<pyshell#187>", line 2, in <module>
    print(shoppingList[i])
TypeError: list indices must be integers or slices, not str
>>> len(shoppingList)
3
>>> 
>>> for i in shoppingList:
	print(i)
	
SyntaxError: invalid syntax
>>> for i in shoppList:
	print(i)

	
Traceback (most recent call last):
  File "<pyshell#192>", line 1, in <module>
    for i in shoppList:
NameError: name 'shoppList' is not defined
>>> for i in shoppingList:
	print(i)

	
Milk
Eggs
Oranges
>>> tup = (2,43,6)
>>> for i in tup:
	print(i)

	
2
43
6
>>> for i in range(0,101,2)
SyntaxError: invalid syntax
>>> for i in range(0,101,2):
	print(i)

	
0
2
4
6
8
10
12
14
16
18
20
22
24
26
28
30
32
34
36
38
40
42
44
46
48
50
52
54
56
58
60
62
64
66
68
70
72
74
76
78
80
82
84
86
88
90
92
94
96
98
100
>>> for i in(100, 0, -1):
	print(i)

	
100
0
-1
>>> for i in range(100,0,-1):
	print(i)

	
100
99
98
97
96
95
94
93
92
91
90
89
88
87
86
85
84
83
82
81
80
79
78
77
76
75
74
73
72
71
70
69
68
67
66
65
64
63
62
61
60
59
58
57
56
55
54
53
52
51
50
49
48
47
46
45
44
43
42
41
40
39
38
37
36
35
34
33
32
31
30
29
28
27
26
25
24
23
22
21
20
19
18
17
16
15
14
13
12
11
10
9
8
7
6
5
4
3
2
1
>>> for i in range(101, -1, 1)
SyntaxError: invalid syntax
>>> for i in range(101, -1, 1):
	print(i)

	
>>> for i in range(101, 1, -1):
	print(i)

	
101
100
99
98
97
96
95
94
93
92
91
90
89
88
87
86
85
84
83
82
81
80
79
78
77
76
75
74
73
72
71
70
69
68
67
66
65
64
63
62
61
60
59
58
57
56
55
54
53
52
51
50
49
48
47
46
45
44
43
42
41
40
39
38
37
36
35
34
33
32
31
30
29
28
27
26
25
24
23
22
21
20
19
18
17
16
15
14
13
12
11
10
9
8
7
6
5
4
3
2
>>> counter = 5
>>> while counter < 10:
	print(counter)
	counter = counter + 1

	
5
6
7
8
9
>>> counter
10
>>> while counter > 5
SyntaxError: invalid syntax
>>> while counter > 5:
	print(counter)
	counter = counter - 1

	
10
9
8
7
6
>>> counter
5
>>> while counter < 10
SyntaxError: invalid syntax
>>> while counter < 10:
	print(counter)
	counter += 1

	
5
6
7
8
9
>>> counter
10
>>> while counter > 5:
	print(counter)
	counter -= 1

	
10
9
8
7
6
>>> for i in range(0,5):
	for a in range(0,5):
		print(a)

		
0
1
2
3
4
0
1
2
3
4
0
1
2
3
4
0
1
2
3
4
0
1
2
3
4
>>> for i in range (0,10):
	if(i%1 == 0):
		print(i)

		
0
1
2
3
4
5
6
7
8
9
>>> for i in range (0,10):
	if(i%1 === 0):
		
SyntaxError: invalid syntax
>>> for i in range (0,10):
	if(i%1 == 0):
		for j in range (i,10):
			if(j%i == 0):
				print(j);

				
Traceback (most recent call last):
  File "<pyshell#253>", line 4, in <module>
    if(j%i == 0):
ZeroDivisionError: integer division or modulo by zero
>>> for i in range (0,10):
	if(i%1 == 0):
		for j in range (i,10):
			if(j%i == 0 && i != 0):
				print(j);
				
SyntaxError: invalid syntax
>>> for i in range (0,10):
	if(i%1 == 0):
		for j in range (i,10):
			if(j%i == 0 and i != 0):
				print(j);

				
Traceback (most recent call last):
  File "<pyshell#256>", line 4, in <module>
    if(j%i == 0 and i != 0):
ZeroDivisionError: integer division or modulo by zero
>>> for i in range(0,10):
	if(i%1 == 0 and i%i == 0 and i != 0):
		print(i)

		
Traceback (most recent call last):
  File "<pyshell#260>", line 2, in <module>
    if(i%1 == 0 and i%i == 0 and i != 0):
ZeroDivisionError: integer division or modulo by zero
>>> for i in range(0,10):
	if(i != 0):
		if(i%i == 0 and i%1=0):
			
SyntaxError: invalid syntax
>>> for i in range(0,10):
	if(i != 0):
		if(i%i == 0 and i%1 == 0):
			print(i)

			
1
2
3
4
5
6
7
8
9
>>> for i in range (0,10)
SyntaxError: invalid syntax
>>> for i in range(0,10):
	if (i != 0):
		for j in range (i,10):
			if(i%i == 0 and i%1 == 0 and i%j == 0):
				print(i);

				
1
2
3
4
5
6
7
8
9
>>> for i in range(0,10):
	if (i != 0):
		print('i: '+ i)
		for j in range (i,10):
			print('j: '+ j)
			if(i%i == 0 and i%1 == 0 and i%j == 0):
				print(i%i)
				print(i%1)
				print(i%j)
				print(i);

				
Traceback (most recent call last):
  File "<pyshell#275>", line 3, in <module>
    print('i: '+ i)
TypeError: must be str, not int
>>> for i in range(0,10):
	if (i != 0):
		print(i)
		for j in range (i,10):
			print(j)
			if(i%i == 0 and i%1 == 0 and i%j == 0):
				print(i%i)
				print(i%1)
				print(i%j)
				print(i);

				
1
1
0
0
0
1
2
3
4
5
6
7
8
9
2
2
0
0
0
2
3
4
5
6
7
8
9
3
3
0
0
0
3
4
5
6
7
8
9
4
4
0
0
0
4
5
6
7
8
9
5
5
0
0
0
5
6
7
8
9
6
6
0
0
0
6
7
8
9
7
7
0
0
0
7
8
9
8
8
0
0
0
8
9
9
9
0
0
0
9
>>> for i in range(0,10):
	if (i != 0):
		print(i)
		for j in range (i,10):
			print(j)
			if(i%i == 0 and i%1 == 0 and (i%j == 0 and i != j)):
				print(i);

				
1
1
2
3
4
5
6
7
8
9
2
2
3
4
5
6
7
8
9
3
3
4
5
6
7
8
9
4
4
5
6
7
8
9
5
5
6
7
8
9
6
6
7
8
9
7
7
8
9
8
8
9
9
9
>>> for i in range(0,10):
	if (i != 0 and i%i = 0):
		
SyntaxError: invalid syntax
>>> for i in range(0,10):
	if (i != 0 and i%i == 0):
		for (j in range (0,10)):
			
SyntaxError: invalid syntax
>>> for i in range(0,10):
	if (i != 0 and i%i == 0 and i%1 == 0):
		for j in range (0,10):
			if (i%j != 0 and j != 0):
				print (i)

				
Traceback (most recent call last):
  File "<pyshell#286>", line 4, in <module>
    if (i%j != 0 and j != 0):
ZeroDivisionError: integer division or modulo by zero
>>> for i in range(0,10):
	if (i != 0 and i%i == 0 and i%1 == 0):
		for j in range (0,10):
			if (j != 0 and i%j != 0):
				print (i)

				
1
1
1
1
1
1
1
1
2
2
2
2
2
2
2
3
3
3
3
3
3
3
4
4
4
4
4
4
5
5
5
5
5
5
5
6
6
6
6
6
7
7
7
7
7
7
7
8
8
8
8
8
9
9
9
9
9
9
>>> for i in range(0,10):
	if (i != 0 and i%i == 0 and i%1 == 0):
		for j in range (0,10):
			if (j != 0 and i%j != 0 and i%i == 0 and i%1 == 0):
				print (i)

				
1
1
1
1
1
1
1
1
2
2
2
2
2
2
2
3
3
3
3
3
3
3
4
4
4
4
4
4
5
5
5
5
5
5
5
6
6
6
6
6
7
7
7
7
7
7
7
8
8
8
8
8
9
9
9
9
9
9
>>> for i in range(0,10):
	if (i != 0 and i%i == 0 and i%1 == 0):
		for j in range (0,10):
			if (j != 0 and i%j != 0 and i%i == 0 and i%1 == 0):
				print (j)

				
2
3
4
5
6
7
8
9
3
4
5
6
7
8
9
2
4
5
6
7
8
9
3
5
6
7
8
9
2
3
4
6
7
8
9
4
5
7
8
9
2
3
4
5
6
8
9
3
5
6
7
9
2
4
5
6
7
8
>>> for i in range(0,10):
	if (i != 0 and i%i == 0 and i%1 == 0):
		for j in range (0,10):
			if (j != 0 and i%j != 0 and i%i == 0 and i%1 == 0):
				print (j)
			else
			
SyntaxError: invalid syntax
>>> for i in range(0,10):
	if (i != 0 and i%i == 0 and i%1 == 0):
		for j in range (0,10):
			if (j != 0 and i%j != 0 and i%i == 0 and i%1 == 0):
				print (j)
			else:
				print(i)

				
1
1
2
3
4
5
6
7
8
9
2
2
2
3
4
5
6
7
8
9
3
3
2
3
4
5
6
7
8
9
4
4
4
3
4
5
6
7
8
9
5
5
2
3
4
5
6
7
8
9
6
6
6
6
4
5
6
7
8
9
7
7
2
3
4
5
6
7
8
9
8
8
8
3
8
5
6
7
8
9
9
9
2
9
4
5
6
7
8
9
>>> for i in range(0,10):
	if (i != 0 and i%i == 0 and i%1 == 0):
		for j in range (0,10):
			if (j != 0 and i%j != 0 and i%i == 0 and i%1 == 0):
				
			else:
				print(i)
				
SyntaxError: expected an indented block
>>> for i in range(0,10):
	if (i != 0 and i%i == 0 and i%1 == 0):
		for j in range (0,10):
			if (j != 0 and i%j != 0 and i%i == 0 and i%1 == 0):else:
				print(i)
				
SyntaxError: invalid syntax
>>> 
>>> for i in range(0,10):
	if (i != 0 and i%i == 0 and i%1 == 0):
		for j in range (0,10):
			if (j != 0 and i%j != 0 and i%i == 0 and i%1 == 0):
				print('')
			else:
				print(i)

				
1
1








2
2
2







3
3

3






4
4
4

4





5
5



5




6
6
6
6


6



7
7





7


8
8
8

8



8

9
9

9





9
>>> for i in range(0,10):
	if (i != 0 and i%i == 0 and i%1 == 0):
		for j in range (0,10):
			if (j != 0 and i%j != 0 and i%i == 0 and i%1 == 0):
				print('')
			else:
				print(j)

				
0
1








0
1
2







0
1

3






0
1
2

4





0
1



5




0
1
2
3


6



0
1





7


0
1
2

4



8

0
1

3





9
>>> for i in range(0,10):
	for j in range (0,10):
		if (j != 0 and i%j != 0 and i%i == 0 and i%1 == 0):
			print('')
			else:print(j)
			
SyntaxError: invalid syntax
>>> for i in range(0,10):
	for j in range (0,10):
		if (j != 0 and i%j != 0 and i%i == 0 and i%1 == 0):
			print('')
			else:print(j)
			
SyntaxError: invalid syntax
>>> for i in range(0,10):
	for j in range (0,10):
		if (j != 0 and i%j != 0 and i%i == 0 and i%1 == 0):
			print('')
			else: print(j)
			
SyntaxError: invalid syntax
>>> for i in range(0,10):
	for j in range (0,10):
		if (j != 0 and i%j != 0 and i%i == 0 and i%1 == 0):
			print('')else:
				
SyntaxError: invalid syntax
>>> for i in range(0,10):
	for j in range (0,10):
		if (j != 0 and i%j != 0 and i%i == 0 and i%1 == 0):
			print(i)
		else:
			print('')

			












1
1
1
1
1
1
1
1



2
2
2
2
2
2
2


3

3
3
3
3
3
3



4

4
4
4
4
4


5
5
5

5
5
5
5




6
6

6
6
6


7
7
7
7
7

7
7



8

8
8
8

8


9

9
9
9
9
9

>>> var primenumber = 1
SyntaxError: invalid syntax
>>> primenumber = 1
>>> for i in range(0,10):
	for j in range (0,10):
		if (j != 0 and i%j != 0 and i%i == 0 and i%1 == 0):
			print(i)
		else:
			print('')

			












1
1
1
1
1
1
1
1



2
2
2
2
2
2
2


3

3
3
3
3
3
3



4

4
4
4
4
4


5
5
5

5
5
5
5




6
6

6
6
6


7
7
7
7
7

7
7



8

8
8
8

8


9

9
9
9
9
9

>>> primenumber = []
>>> for i in range(0,10):
	for j in range (0,10):
		if (j != 0 and i != 0 and i%i == 0 and i%1 == 0):
			if(j != 0 or j != 1):
				if(i%j == 0 and i==j ):
					print(i)

					
1
2
3
4
5
6
7
8
9
>>> for i in range(0,10):
	for j in range (0,10):
		if (j != 0 and i != 0 and i%i == 0 and i%1 == 0):
			if(j != 0 or j != i):
				if(i%j == 0 and i==j ):
					print(i)

					
1
2
3
4
5
6
7
8
9
>>> for i in range(0,10):
	for j in range (0,10):
		if (j != 0 and i != 0 and i%i == 0 and i%1 == 0):
			if(j != 0 or j != i):
				if(i%j != 0):
					print(i)

					
1
1
1
1
1
1
1
1
2
2
2
2
2
2
2
3
3
3
3
3
3
3
4
4
4
4
4
4
5
5
5
5
5
5
5
6
6
6
6
6
7
7
7
7
7
7
7
8
8
8
8
8
9
9
9
9
9
9
>>> 
=============================== RESTART: Shell ===============================
>>> for i in range (2,30):
	j =2
	while j < i
	
SyntaxError: invalid syntax
>>> for i in range (2,30):
	j =2
	counter = 0
	while j < i:
		if(i%j == 0):
			counter = 1
		else:
			j = j+1
	if counter == 1
	
SyntaxError: invalid syntax
>>> for i in range (2,30):
	j =2
	counter = 0
	while j < i:
		if(i%j == 0):
			counter = 1
		else:
			j = j+1
	if counter == 1:
		print(i + "is a primenumber")
		counter = 0

		

=============================== RESTART: Shell ===============================
>>> for i in range (2,30):
	j =2
	counter = 0
	while j < i:
		if(i%j == 0):
			counter = 1
			j= j+1
		else:
			j = j+1
	if counter == 0:
		print(str(i) + "is a primenumber")
	else:
		counter = 0

		
2is a primenumber
3is a primenumber
5is a primenumber
7is a primenumber
11is a primenumber
13is a primenumber
17is a primenumber
19is a primenumber
23is a primenumber
29is a primenumber
>>> counter = 0
>>> while counter < 100:
	print(counter)
	counter += 1

	
0
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72
73
74
75
76
77
78
79
80
81
82
83
84
85
86
87
88
89
90
91
92
93
94
95
96
97
98
99
>>> counter = 0
>>> while counter < 100:
	if counter == 4:
		break
		print(counter)
		counter += 1

		

=============================== RESTART: Shell ===============================
>>> while counter < 100:
	if counter == 4:
		break
	else
		pass
		print(counter)
		counter += 1
		
SyntaxError: invalid syntax
>>> while counter < 100:
	if counter == 4:
		break
	else:
		pass
		print(counter)
		counter += 1

		
Traceback (most recent call last):
  File "<pyshell#353>", line 1, in <module>
    while counter < 100:
NameError: name 'counter' is not defined
>>> counter = 0
>>> while counter < 100:
	if counter == 4:
		break
	else:
		pass
	print(counter)counter= counter + 1
	
SyntaxError: invalid syntax
>>> counter = 0
>>> while counter < 100:
	if counter == 4:
		break
	else:
		pass
	print(counter)
	
SyntaxError: multiple statements found while compiling a single statement
>>> counter = 0
>>> while counter < 100:
	if counter == 4:
		break
	else:
		pass
		print(counter)counter= counter + 1
		
SyntaxError: multiple statements found while compiling a single statement
>>> counter = 0
>>> while counter < 100:
	if counter == 4:
		break
	else:
		pass
		print(counter)counter= counter + 1
		
SyntaxError: multiple statements found while compiling a single statement
>>> while counter < 100:
	if counter == 5:
		break
	else:
		pass
	print(counter)
	counter = conunter + 1

	
0
Traceback (most recent call last):
  File "<pyshell#366>", line 7, in <module>
    counter = conunter + 1
NameError: name 'conunter' is not defined
>>> counter = 0
>>> while counter < 100:
	if counter == 4:
		break
	else:
		pass
	print(counter)
	counter = counter + 1

	
0
1
2
3
>>> for i in "Python":
	if i == "h":
		continue
	print(i)

	
P
y
t
o
n
>>> for i in range(0,5):
	if i <2:
		continue
	print(i)

	
2
3
4
>>> try: if name > 3:
	
SyntaxError: invalid syntax
>>> try:
	if name > 3:
		print("Hi")
except:
	print("Python ran into an error. Please take a look at your code")

	
Python ran into an error. Please take a look at your code
>>> #this is a comment
>>> """ this is a multi line comment
this is a multi line comment
this is a multi line comment """
' this is a multi line comment\nthis is a multi line comment\nthis is a multi line comment '
>>> """
this is a multi line comment
this is a multi line comment
this is a multi line comment """
'\nthis is a multi line comment\nthis is a multi line comment\nthis is a multi line comment '
>>> string "45'test'"
SyntaxError: invalid syntax
>>> string = "45 'test' "
>>> string
"45 'test' "
>>> string = "test"
>>> string = 'test's'
SyntaxError: invalid syntax
>>>  string = 'test\'s'
 
SyntaxError: unexpected indent
>>> string = 'test\'s'
>>> string
"test's"
>>> '$'+str(45)
'$45'
>>> '$'+ 45
Traceback (most recent call last):
  File "<pyshell#406>", line 1, in <module>
    '$'+ 45
TypeError: must be str, not int
>>> blueorangeswithcheese = "a"
>>> cheesefieddumplingsaucewithcherrysauce = "b"
>>> if blueorangeswithcheese \
   == \
   cheesefieddumplingsaucewithcherrysauce:
	print("Hello")
else:
	print("Hiya")

	
Hiya
>>> for i in range(0,31,2):
	if(i != 0 and i%2 == 0 ):
		print("even: " + str(i))
	else:
		print("odd: "+ str(i))

		
odd: 0
even: 2
even: 4
even: 6
even: 8
even: 10
even: 12
even: 14
even: 16
even: 18
even: 20
even: 22
even: 24
even: 26
even: 28
even: 30
>>> for i in range(0,31,2):
	if(i%2 == 0 ):
		print("even: " + str(i))

		
even: 0
even: 2
even: 4
even: 6
even: 8
even: 10
even: 12
even: 14
even: 16
even: 18
even: 20
even: 22
even: 24
even: 26
even: 28
even: 30
>>> for i in range(0,31,2):
	if(i%2 == 0 ):
		print("even: " + str(i))
	if (i%2 != 0:
		print("odd: "+ str(i))
	    
SyntaxError: invalid syntax
>>> for i in range(0,31,2):
	if(i%2 == 0 ):
		print("even: " + str(i))
	if (i%2 != 0):
		print("odd: "+ str(i))

		
even: 0
even: 2
even: 4
even: 6
even: 8
even: 10
even: 12
even: 14
even: 16
even: 18
even: 20
even: 22
even: 24
even: 26
even: 28
even: 30
>>> for i in range(0,31,2):
	if(i%2 == 0 ):
		print("even: " + str(i))
		break;
	if (i%2 != 0):
		print("odd: "+ str(i))
		break;

	
even: 0
>>> for i in range(0,31,2):
	if(i%2 == 0 ):
		print("even: " + str(i))
		break
	else:
		print("odd: "+ str(i))
		pass

	
even: 0
>>> for i in range(0,31,1):
	if(i%2 == 0 ):
		print("even: " + str(i))
		break
	else:
		print("odd: "+ str(i))
		pass

	
even: 0
>>> for i in range(0,31,1):
	if(i%2 == 0 ):
		print("even: " + str(i))
	else:
		print("odd: "+ str(i))

		
even: 0
odd: 1
even: 2
odd: 3
even: 4
odd: 5
even: 6
odd: 7
even: 8
odd: 9
even: 10
odd: 11
even: 12
odd: 13
even: 14
odd: 15
even: 16
odd: 17
even: 18
odd: 19
even: 20
odd: 21
even: 22
odd: 23
even: 24
odd: 25
even: 26
odd: 27
even: 28
odd: 29
even: 30
>>> day = "Tuesday"
>>> if(day == "Tuesday"):
	print('Today is sunny')
else:
	print('Today it will rain')

	
Today is sunny
>>> if(day == "Tuesday" or day == "Monday"):
	print('Today is sunny')
else:
	print('Today it will rain')

	
Today is sunny
>>> Earthweight = 80
>>> moonWeight = 1/6 * 80
>>> moonWeight = 1/6 * Earthweight
>>> moonWeight
13.333333333333332
>>> for i in range(80,1)
SyntaxError: invalid syntax
>>> for i in range(80,1):
	print (i)

	
>>> i
30
>>> counter = 0;
>>> while counter < 10:
	Earthweight = Earthweight + counter
	moonWeight= 1/6 * Earthweight
	counter = counter + 1

	
>>> counter = 0
>>> while counter < 10:
	Earthweight = Earthweight + counter
	moonWeight= 1/6 * Earthweight
	counter = counter + 1
	print(moonWeight)

	
20.833333333333332
21.0
21.333333333333332
21.833333333333332
22.5
23.333333333333332
24.333333333333332
25.5
26.833333333333332
28.333333333333332
>>> weight = 80.0

>>> for i in range(0,10):
	moonweight = weight / 6
	print(moonweight)
	weight = weight + 1

13.333333333333334
13.5
13.666666666666666
13.833333333333334
14.0
14.166666666666666
14.333333333333334
14.5
14.666666666666666
14.833333333333334
>>> counter = 0
>>> weight = 80
>>> while counter < 10:
	moonweight = weight/6
	print(moonweight)
	counter = counter+1
	weight = weight + 1

	
13.333333333333334
13.5
13.666666666666666
13.833333333333334
14.0
14.166666666666666
14.333333333333334
14.5
14.666666666666666
14.833333333333334
>>> 
def funName(myname):
	print("Hello, %s" %myname)

	
>>> funName("Patrick")
Hello, Patrick
>>> def fullName(fname, lName):
	print("Hello %s %s" %(fName, lName))

	
>>> fullName("Patrick", "Akpala")
Traceback (most recent call last):
  File "<pyshell#482>", line 1, in <module>
    fullName("Patrick", "Akpala")
  File "<pyshell#481>", line 2, in fullName
    print("Hello %s %s" %(fName, lName))
NameError: name 'fName' is not defined
>>> def fullName(fname, lName):
	print("Hello %s %s" %(fname, lName))

	
>>> fullName("Patrick", "Akpala")
Hello Patrick Akpala
>>> def formatAmount(currency, amount):
	if(currency == pounds):
		currency = "£"
	elif(currency == dollar):
		currency = "$"
	else:
		currency = "£"
	print("%s %s" %(currency, amount))

	
>>> formatAmount("dollar",50)
Traceback (most recent call last):
  File "<pyshell#495>", line 1, in <module>
    formatAmount("dollar",50)
  File "<pyshell#494>", line 2, in formatAmount
    if(currency == pounds):
NameError: name 'pounds' is not defined
>>> def formatAmount(currency, amount):
	if(currency == "pounds"):
		currency = "£"
	elif(currency == "dollar"):
		currency = "$"
	else:
		currency = "£"
	print("%s %s" %(currency, amount))

	
>>> formatAmount("dollar",50)
$ 50
>>> formatAmount("pounds",50)
£ 50
>>> formatAmount("naira",50)
£ 50
>>> def taxReturn (cost):
	return cost * 1.1

>>> taxReturn(100)
110.00000000000001
>>> def add():
	num1 = 100
	num2 = 200
	return num1 + num2

>>> print(add())
300
>>> num1 = 100
>>> num2 = 200
>>> def add():
	return num1 + num2

>>> add()
300
>>> formatAmount(50,"naira")
£ naira
>>> 
