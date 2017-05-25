example:  example.o main.o
	g++ -o example example.o main.o

main.o: main.cpp
	g++ -c main.cpp

example.o: example.cpp
	g++ -c example.cpp

clean: 
	rm *.o example
