#include<iostream>
using namespace std;

template <class T>
T add(T a, T b)
{
    T result;
    result = a + b;
    return result;
}
int main()
{
    cout << add(3, 4) << endl;
}
