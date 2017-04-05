#include<iostream>
using namespace std;

/* template <class type> type add(type a, type b) */
template <class T> T getMax(T a,T b)
{
    T result;
    result = (a>b)? a : b;
    return result;
}

int main()
{
    cout << getMax(1.5, 2.2) << endl;
}
