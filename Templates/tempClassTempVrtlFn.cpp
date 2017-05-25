#include<iostream>
using namespace std;

template <class T> 
class MyVal {
    public:
      virtual void fun(T val);
};

template <class T>
void MyVal<T> :: fun(T val)
{
    cout << "value is " << val << endl;
}

int main()
{
    MyVal<double> m;
    m.fun(100);
    m.fun(22.5);
}
