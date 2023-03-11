# ASSESSMENT 4: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is object-oriented programming? How is it different than functional programming?

Your answer: Object-oriented programming is coding on separate parts of a project so that if something breaks, the whole project doesn't break. 

Researched answer: Object-oriented programming is a programming model that is able to deal with large, complex programs. It is containing data in separate sections of code that can be changed and updated without affecting the entire program. With object-oriented programming, programs are consisted of a large interaction of smaller parts, rather than one large code that depend on eachother. Ruby is an object-oriented language which means that everything in Ruby is an object. This is different from functional programming in that functional programmming evaluates functions while OOP focuses on classes and objects. 

2. What is the difference between a Float and an Integer in Ruby?

Your answer: In Ruby, the difference between a Float and an Integer is that an integer are only whole numbers while floats are numbers that has a decimal point (can be whole numbers 3.0 or non-whole numbers 4.5)

Researched answer: In Ruby, the difference between a Float and an Integer is that an integer are only whole numbers while floats are numbers that has a decimal point (can be whole numbers 3.0 or non-whole numbers 4.5). If you want to return a non-whole number in Ruby, you'll need to convert the whole number into a float first in order to pass it into the equation. For example, (3.0 / 2) will return 1.5, whereas if you just did (3 / 2), it will only return a whole integer of 1. Inputting integers will only return an integer, inputting floats will return a float.

3. Ruby has an implicit return. What does that mean?

Your answer: An implicit return means the code is read line by line and it will return the last line item. This means that you don't need to write out what you want to return because Ruby will automatically spit that out for you, unless there are multiple things you want to return. If you have multiple things to return, in Ruby, if you don't write anything, it'll only return the last item.

Researched answer: An implicit return means that Ruby will automatically return the last line of a method if there is no return specified. This means you don't have to explicitly write out the word "return" in a method because it will already return that last value. This only works if you are expecting only only return. If you have multiple things to return, in Ruby, if you don't write "return", it'll only return the last item.


4. What is a block in Ruby?

Your answer: A block is something that can be iterated over..? I forgot about blocks are but remembered that we learned it in the same lecture as iterables.

Researched answer: A block in Ruby is an anonymous function that is passed to a method since some methods require additional information inputted to modify a method action. They are typically defined with the keywords "do" and "end". It is important to always "end" the method since Ruby doesn't use any other syntax to indicate the end of a method. Some examples of Ruby blocks are: .times (to indicate how many times you want to perform an action; will repeat the code a certain number of times), .each (to indicate what action will be performed on each iteration), .map (will let you do something to each element of an array)

5. How do you extract a value in a Ruby hash?

Your answer: You extract a value in a Ruby hash with the syntax [:key_name]

Researched answer: A hash is a collection of key:value pairs and values are referenced by their unique key. It looks very similar to an object in JavaScript. To reference the value in a Ruby hash, you would log the name of the hash and it's key (p hash_name[:key_name]). To extract or remove a key:value pair from a hash, you would use the .delete method and pass the key in as an argument (hash_name.delete(:key_name)). To change a value in a hash, you would take the key in square brackets and reassign it a different value (hash_name[:key_name] = 'new value')

## Looking Ahead: Terms for Next Week

1. Class Inheritance: Class inheritance is the concept of passing data from from class to another. There are situations where multiple classes need similar attributes and storing these behaviors into a shared class is creating a superclass of the similar behaviors. A superclass can now pass information down to subclasses that are able to receive data from the superclass. This passing of data is class inheritance and is defined with the syntax <.

2. RSpec: RSpec (request specification) is a testing framework for Ruby that is used for testing the behavior of objects. We can use RSpec to create specs that describe the desired output, which is very similar to testing with Jest. Similar to Jest, to test with RSpec we will need the appropiate dependencies to add RSpec to the project by running the command 'gem install rspec'.

3. CRUD: CRUD stands for create, read, update, delete which are the four general actions that can be performed on data (this past week we learned about CRUD for hashes).
Create: we can create new data
Read: we can read data that currently exists
Update: we can update existing data
Delete: we can delete/remove existing data

4. Test-driven development: Test-driven development is the idea of creating tests to ensure the code created will function properly or as expected, ultimately checking the input and output of the code. This is similar to behavior-driven development where the tests will ensure that the code will behave as expected. 

5. HTTP: HTTP stands for Hypertext Transfer Protocol which is used for tramsmitting hypermedia documents. It is meant for the communication between web browsers and servers and allows us to communicate data on the internet (World Wide Web).
