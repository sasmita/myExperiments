#include<iostream>
using namespace std;
#include "shape.hpp"

int Shape::area()
{
    cout << "Parent class Area" << endl;
    return 0;
}

int Rectangle::area()
{
    cout << "Rectangle class Area" << endl;
    return (width * height);
}

