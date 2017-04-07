#include<iostream>
using namespace std;

template <class T>
class checkEven
{
    public:
      T a;
      checkEven(T num)
      {
        a = num; }
      T isEven();
};

template <class T>
T checkEven<T> :: isEven()
{
    T result;
    if((a % 2) == 0)
        result = 1;
    else
        result = 0;
    return result;
}

int main()
{
    checkEven <int> C(30);
    if((C.isEven()) == 0)
        cout << "Not even" << endl;
    else
        cout << "Even" << endl;
}
