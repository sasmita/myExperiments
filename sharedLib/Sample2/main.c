#include "foo.h"
#include <stdio.h>
int main()
{
	printf("This is a shared library test!\n");
	foo();
	return 0;
}
