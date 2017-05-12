#include<iostream>
using namespace std;
#include "shape.hpp"

int main()
{
    Shape <int>s(10, 20);
    //Rectangle rec<T>(10, 20);

    //s = &rec;
    cout << s.area() << endl;
}
