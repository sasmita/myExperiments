Creating Shared libraries with gcc on Linux
===========================================

1. Compile your source code with pic(position independent code)

   gcc -c -fpic foo.c

2. Create a shared library(libfoo.so) from an object file

   gcc -shared -o libfoo.so foo.o
 
3. Linking with the shared library(compile main.c and link it with libfoo)
   gcc assumes that all shared libraries starts with "lib" and ends with "so"

   gcc -L. -o foo -lfoo main.c

   -L option (Since gcc doesn't know where to search for libfoo.so.
		As it is in current directory, we use -L.)
 	
4. Run the executable

   ./foo	 
