#include<iostream>
using namespace std;

class example
{
    public:
      template<typename T> void templateFunction(T val); 
      string nontemplateFunction(string a, string b);
};

template<typename T> void example::templateFunction(T val)
{
    cout << "value is: " << val << endl;
}

