#include<iostream>
using namespace std;

template <class T>
class Polygon {
    protected:
      T width, height;
    public:
      void setValues(T a, T b)
        {
            width = a;
            height = b;
        }
        virtual T area()
        { return 0; }
};

template <class T>
class Rectangle : public Polygon<T>
{
    public:
      virtual T area()
      { return Polygon<T>::width * Polygon<T>::height; }
};

template <class T>
class Triangle : public Polygon<T>
{
    public:
      T area()
      { return (Polygon<T>::width * Polygon<T>::height)/2; }
};

int main()
{
    Rectangle<int> rect;
    Polygon<int> *p1 = &rect;
    p1->setValues(3,4);
    Triangle<int> tri;
    Polygon<int> *p2 = &tri;
    p2->setValues(3,4);
    cout << "Rectangle area: " << p1->area() << endl;
    cout << "Triangle area: " << p2->area() << endl;
    return 0;
}
