#include<iostream>
using namespace std;

class smartPtr
{
    int *ptr;
public:
    smartPtr(int *p = NULL)
    {
        ptr = p;
    }
    ~smartPtr()
    {   delete(ptr); }

    int &operator *() 
    {
        return *ptr;
    }
};

int main()
{
    smartPtr ptr(new int());
    *ptr = 20;
    cout << *ptr << endl;
    return 0;
}
