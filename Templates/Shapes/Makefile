shape:  shape.o main.o
	g++ -o shape shape.o main.o

main.o: main.cpp
	g++ -c main.cpp

shape.o: shape.cpp
	g++ -c shape.cpp

clean: 
	rm *.o shape
