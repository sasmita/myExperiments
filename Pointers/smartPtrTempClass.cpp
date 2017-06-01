#include<iostream>
using namespace std;

template <class T>
class smartPtr
{
    T *ptr;
public:
    smartPtr(T *p = NULL)
    {   ptr = p; }
    ~smartPtr() 
    {   delete(ptr); }

    virtual T &operator *()
    {
        return * ptr; }
    virtual T *operator -> () 
    {
        return ptr; }
};

int main()
{
    smartPtr<int> ptr(new int());
    *ptr = 20;
    cout << *ptr << endl;
    return 0;
}

