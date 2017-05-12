#include<iostream>
using namespace std;

template <class T> 
class mypair {
    T a, b;
    public:
        mypair(T first, T second)
        {
            a = first;
            b = second;
        }
    virtual T getMax(); 
};

template <class T>
T mypair<T> :: getMax()
{
    T result;
    result = (a > b)? a: b;
    return result;
}

int main()
{
    mypair <int> obj (100, 75);
    cout << obj.getMax() << endl;
}
