#include<iostream>
using namespace std;

class MyVal {
    public:
      template <typename T>
      void fun(T val);
};

template <typename T>
void MyVal :: fun(T val)
{
    cout << "value is " << val << endl;
}

int main()
{
    MyVal m;
    m.fun<int>(100);
    m.fun<double>(22.5);
}
