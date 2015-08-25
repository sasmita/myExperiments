#include<iostream>
using namespace std;

class Square
{
	public:
		int Area()
		{
			cout << "Enter a integer variable: " << endl;
			cin >> side;
			return side * side;
		}	
	
	private:
		int side;		

};

int main()
{
	Square S;
	cout << S.Area() << endl;

	return 0;

}
