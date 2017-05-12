#include<iostream>
using namespace std;
#include "shape.hpp"

int main()
{
    Shape *s;
    Rectangle rec(10, 20);

    s = &rec;
    cout << s->area() << endl;
}
