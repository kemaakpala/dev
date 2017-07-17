Python 3.6.2 (v3.6.2:5fd33b5926, Jul 16 2017, 20:11:06) 
[GCC 4.2.1 (Apple Inc. build 5666) (dot 3)] on darwin
Type "copyright", "credits" or "license()" for more information.
>>> fileName = open("test.txt")
Traceback (most recent call last):
  File "<pyshell#0>", line 1, in <module>
    fileName = open("test.txt")
FileNotFoundError: [Errno 2] No such file or directory: 'test.txt'
>>> testFile = open("/Users/patrickakpala/dev/udemy/pythonforbeginners/test.txt")
>>> testFile
<_io.TextIOWrapper name='/Users/patrickakpala/dev/udemy/pythonforbeginners/test.txt' mode='r' encoding='US-ASCII'>
>>> testFile.read()
Traceback (most recent call last):
  File "<pyshell#3>", line 1, in <module>
    testFile.read()
  File "/Library/Frameworks/Python.framework/Versions/3.6/lib/python3.6/encodings/ascii.py", line 26, in decode
    return codecs.ascii_decode(input, self.errors)[0]
UnicodeDecodeError: 'ascii' codec can't decode byte 0xe2 in position 26: ordinal not in range(128)
>>> testFile
<_io.TextIOWrapper name='/Users/patrickakpala/dev/udemy/pythonforbeginners/test.txt' mode='r' encoding='US-ASCII'>
>>> testFile = open("test.txt")
Traceback (most recent call last):
  File "<pyshell#5>", line 1, in <module>
    testFile = open("test.txt")
FileNotFoundError: [Errno 2] No such file or directory: 'test.txt'
>>> import os.path
>>> scriptpath = os.path.dirname('test.txt')
>>> scriptpath
''
>>> scriptpath = os.path.dirname(__file__)
Traceback (most recent call last):
  File "<pyshell#9>", line 1, in <module>
    scriptpath = os.path.dirname(__file__)
NameError: name '__file__' is not defined
>>> scriptpath = os.path.dirname()
Traceback (most recent call last):
  File "<pyshell#10>", line 1, in <module>
    scriptpath = os.path.dirname()
TypeError: dirname() missing 1 required positional argument: 'p'
>>> scriptpath = os.path.dirname("__file__")
>>> scriptpath
''
>>> scriptpath = os.path.dirname(os.path.realpath('__file__'))
>>> scriptpath
'/Users/patrickakpala/Documents'
>>> filename = os.path.join(scriptpath, 'test.txt')
>>> filename
'/Users/patrickakpala/Documents/test.txt'
>>> testFile = open(filename)
>>> print(testFile.read())
Traceback (most recent call last):
  File "<pyshell#18>", line 1, in <module>
    print(testFile.read())
  File "/Library/Frameworks/Python.framework/Versions/3.6/lib/python3.6/encodings/ascii.py", line 26, in decode
    return codecs.ascii_decode(input, self.errors)[0]
UnicodeDecodeError: 'ascii' codec can't decode byte 0xe2 in position 26: ordinal not in range(128)
>>>  filename = os.path.join(scriptpath, 'Test.txt')
 
SyntaxError: unexpected indent
>>> filename = os.path.join(scriptpath, 'Test.txt')
>>> filename
'/Users/patrickakpala/Documents/Test.txt'
>>> testFile = open(filename)
>>> testFile.read()
Traceback (most recent call last):
  File "<pyshell#23>", line 1, in <module>
    testFile.read()
  File "/Library/Frameworks/Python.framework/Versions/3.6/lib/python3.6/encodings/ascii.py", line 26, in decode
    return codecs.ascii_decode(input, self.errors)[0]
UnicodeDecodeError: 'ascii' codec can't decode byte 0xe2 in position 26: ordinal not in range(128)
>>> testFile
<_io.TextIOWrapper name='/Users/patrickakpala/Documents/Test.txt' mode='r' encoding='US-ASCII'>
>>> testFile = open(filename, encoding='US-ASCII')
>>> testFile.read()
Traceback (most recent call last):
  File "<pyshell#26>", line 1, in <module>
    testFile.read()
  File "/Library/Frameworks/Python.framework/Versions/3.6/lib/python3.6/encodings/ascii.py", line 26, in decode
    return codecs.ascii_decode(input, self.errors)[0]
UnicodeDecodeError: 'ascii' codec can't decode byte 0xe2 in position 26: ordinal not in range(128)
>>> filename = os.path.join(scriptpath, 'Test.txt')
>>> testFile = open(filename)
>>> testFile
<_io.TextIOWrapper name='/Users/patrickakpala/Documents/Test.txt' mode='r' encoding='US-ASCII'>
>>> testFile = open(filename, encoding="UTF-8")
>>> testFile
<_io.TextIOWrapper name='/Users/patrickakpala/Documents/Test.txt' mode='r' encoding='UTF-8'>
>>> testFile.read()
'Hello my name is Patrick\nI’m 31 years old\n\nMary had a little lamb\nHer fleece as white as snow\n\nJingle bells, Jingle bells\nJingle all the way.'
>>> position = testFile.tell()
>>> print(position)
143
>>> position = testFile.seek(0,0)
>>> testFile.read()
'Hello my name is Patrick\nI’m 31 years old\n\nMary had a little lamb\nHer fleece as white as snow\n\nJingle bells, Jingle bells\nJingle all the way.'
>>> testFile.read()
''
>>> position = testFile.seek(0,0)
>>> testFile.read()
'Hello my name is Patrick\nI’m 31 years old\n\nMary had a little lamb\nHer fleece as white as snow\n\nJingle bells, Jingle bells\nJingle all the way.'
>>> testFile.close()
>>> tesFile
Traceback (most recent call last):
  File "<pyshell#41>", line 1, in <module>
    tesFile
NameError: name 'tesFile' is not defined
>>> testFile
<_io.TextIOWrapper name='/Users/patrickakpala/Documents/Test.txt' mode='r' encoding='UTF-8'>
>>> testFile.read()
Traceback (most recent call last):
  File "<pyshell#43>", line 1, in <module>
    testFile.read()
ValueError: I/O operation on closed file.
>>> testFile.open()
Traceback (most recent call last):
  File "<pyshell#44>", line 1, in <module>
    testFile.open()
AttributeError: '_io.TextIOWrapper' object has no attribute 'open'
>>> testFile = open(filename, encoding="UTF-8")
>>> testFile.read()
'Hello my name is Patrick\nI’m 31 years old\n\nMary had a little lamb\nHer fleece as white as snow\n\nJingle bells, Jingle bells\nJingle all the way.'
>>> testFile.close()
>>> testFile = open(filename, mode="w", encoding="UTF-8")
>>> testFile.write("\nPython is an amazing language! |n You can do a lot with it")
59
>>> testFile.close()
>>> testFile = open(filename, encodign="UTF-8")
Traceback (most recent call last):
  File "<pyshell#51>", line 1, in <module>
    testFile = open(filename, encodign="UTF-8")
TypeError: 'encodign' is an invalid keyword argument for this function
>>> testFile = open(filename, mode="w", encoding="UTF-8")
>>> tetFile.read()
Traceback (most recent call last):
  File "<pyshell#53>", line 1, in <module>
    tetFile.read()
NameError: name 'tetFile' is not defined
>>> testFile.close()
>>> testFile = open(filename, mode="r", encoding="UTF-8")
>>> testFile.read()
''
>>> testFile.seek(0,0)
0
>>> testFile.read()
''
>>> estFile = open(filename, mode="w", encoding="UTF-8")
>>> estFile.write("nPython is an amazing language! |n You can do a lot with it")
59
>>> estFile.close()
>>> estFile = open(filename, encoding="UTF-8")
>>> estFile.read()
'nPython is an amazing language! |n You can do a lot with it'
>>> estFile.close()
>>> testFile = open(filname, mode="a", encoding="UTF-8")
Traceback (most recent call last):
  File "<pyshell#65>", line 1, in <module>
    testFile = open(filname, mode="a", encoding="UTF-8")
NameError: name 'filname' is not defined
>>> testFile = open(filename, mode="a", encoding="UTF-8")
>>> testFile.write("\n Hi there i'm Patrick.")
23
>>>  testFile = open(filename, mode="a"+, encoding="UTF-8")
 
SyntaxError: unexpected indent
>>> testFile = open(filename, mode="a+", encoding="UTF-8")
>>> testFile.write("\n Hi there i'm Patrick.")
23
>>> testFile.read()
''
>>> testFile.seek(0,0)
0
>>> testFile.read()
"nPython is an amazing language! |n You can do a lot with it\n Hi there i'm Patrick.\n Hi there i'm Patrick."
>>> fileEncoding = "UTF-8"
>>> testFile = open(filename, encoding=fileEncoding)
>>> testFile.read()
"nPython is an amazing language! |n You can do a lot with it\n Hi there i'm Patrick.\n Hi there i'm Patrick."
>>> import os
>>> os.rename("Test.txt", "Test2.txt")
>>> testFile.close()
>>> inputFileName = input("Enter your file name")
Enter your file name Test2.txt
>>> print inputFileName
SyntaxError: Missing parentheses in call to 'print'
>>> print (inputFileName)
 Test2.txt
>>> testFile = open(inputFileName)
Traceback (most recent call last):
  File "<pyshell#83>", line 1, in <module>
    testFile = open(inputFileName)
FileNotFoundError: [Errno 2] No such file or directory: ' Test2.txt'
>>> inputFileName = input("Enter your file name: ")
Enter your file name: Test2.txt
>>> testFile = open(inputFileName)
>>> newFile = open("Copieddata.txt", "w")
>>> oldFileContent = testFile.read()
>>> oldFileContent
"nPython is an amazing language! |n You can do a lot with it\n Hi there i'm Patrick.\n Hi there i'm Patrick."
>>> newFile.write(oldFileContent)
105
>>> newFile.seek(0,0)
0
>>> newFile.read()
Traceback (most recent call last):
  File "<pyshell#91>", line 1, in <module>
    newFile.read()
io.UnsupportedOperation: not readable
>>> newFile.close()
>>> newFile = open("Copieddata.txt")
>>> newFile.read()
"nPython is an amazing language! |n You can do a lot with it\n Hi there i'm Patrick.\n Hi there i'm Patrick."
>>> 
