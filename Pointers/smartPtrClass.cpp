#include<iostream>
using namespace std;

class Person
{
    int age;
    char* Name;
    public:
        Person(char* Name, int age): Name(Name), age(age)
        {
        }
        ~Person()
        {
        }
        void Display()
        {  cout << "Name: " <<  Name << " Age: " << age << endl;
        }

};

int main()
{   
    Person *p = new Person("Alex", 35);
    p->Display();
    delete p;
    return 0;
}

