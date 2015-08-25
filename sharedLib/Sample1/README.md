Creating Shared libraries with gcc on Mac OSX
=============================================

1. Use -dynamiclib option to compile a dynamic library
   
   gcc -dynamiclib -o libhello.dylib helloWorld.c

2. Compiling an application
 
   gcc -L. -lhello -o hello main.c

3. Run the execuatable

   ./hello
