#include<iostream>
using namespace std;

template<typename T>
class Shape
{
    public:
      Shape(T a, T b) {
        height = a;
        width = b;
      }

      T area();
    protected:
      T height;
      T width;
};

template <typename T>
class Rectangle: public Shape<T>
{
    public:
      Rectangle(T a, T b) {}
      T area();
};


