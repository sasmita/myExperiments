AZURE Table storage in C++ using Linux
=======================================

This guide will help you understand Azure table storage and perform CRUD(Create, Read, Update and Delete) operations on it.

**Getting Started:**

1: Create an Azure Storage Account as shown [here]   (https://azure.microsoft.com/en-us/documentation/articles/storage-create-storage-account/#create-a-storage-account)


2: Since we are planning to perform CRUD operations on Azure Storage using c++, we need to install Azure Storage Client Library for c++.

  1. Clone the library from git
  ```
      git clone https://github.com/Azure/azure-storage-cpp.git
  ``` 
  2. Install Additional Dependencies
  ```
      sudo apt-get install libxml++2.6-dev libxml++2.6-doc uuid-dev
  ```
  3. Azure Storage C++ client library also depends on C++ Rest SDK **casablanca**.
    1.  Install needed tools and libraries:  
    ``` 
        sudo apt-get install g++-4.8 g++ git make libboost1.54-all-dev libssl-dev cmake
    ```
    2. Clone Casablanca from git
    ```
       git clone https://git.codeplex.com/casablanca
    ```
    3. Build SDK for Release
   ``` bash 
        cd casablanca/Release
        mkdir build.release
        cd build.release
        CXX=g++-4.8 cmake .. -DCMAKE_BUILD_TYPE=Release
        make
   ```

  4. Build SDK 
  ``` bash
    cd azure-storage-cpp/Microsoft.WIndowsAzure.Storage
    mkdir build.release
    cd build.release
    CASABLANCA_DIR=<path to Casablanca> CXX=g++-4.8 cmake .. -DCMAKE_BUILD_TYPE=Release
    make
  ```
  The Library is generated under `azure-storage-cpp/Microsoft.WindowsAzure.Storage/build.release/Binaries/`.
  
  5. Building Sample code:
  ```bash
  CASABLANCA_DIR=<path to Casablanca> CXX=g++-4.8 cmake .. -DCMAKE_BUILD_TYPE=Release -DBUILD_SAMPLES=1
  make
  ```
  6. Run the Samples:

  ```bash
  cd Binaries
  ./samplestables           # run the tables sample
  ```
 

Refernces:
------------
1. https://azure.microsoft.com/en-us/documentation/articles/storage-c-plus-plus-how-to-use-tables/
2. https://github.com/Azure/azure-storage-cpp/blob/master/README.md
