#include<iostream>
using namespace std;
#include "example.hpp"

int main()
{
    example e;
    string c = "Good";
    string d = "morning";
    e.templateFunction(100);
    cout << e.nontemplateFunction(c, d) << endl;
}
