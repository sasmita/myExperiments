#include<iostream>
using namespace std;

class Shape
{
    public:
      Shape(int a, int b) {
        height = a;
        width = b;
      }

      virtual int area();
    protected:
      int height;
      int width;
};


class Rectangle: public Shape
{
    public:
      Rectangle(int a, int b):Shape(a,b) {}
      int area();
};


