#include<iostream>
using namespace std;
#include "shape.hpp"

template <typename T>
T Shape<T>::area()
{
    cout << "Parent class Area" << endl;
    return 0;
}

template <typename T>
T Rectangle<T>::area()
{
    cout << "Rectangle class Area" << endl;
    return 0;
}

