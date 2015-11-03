
CPP = /usr/bin/g++-4.8

AZURE_BINARIES = /home/sasmita/azure-storage-cpp/Microsoft.WindowsAzure.Storage/build.release/Binaries

query: query.o
	$(CPP)  -std=c++11 -fno-strict-aliasing -O3 -DNDEBUG  query.o  -o query -rdynamic $(AZURE_BINARIES)/libazurestorage.so.2.1 $(AZURE_BINARIES)/libsamplescommon.so.2.1 /home/sasmita/casablanca/Release/build.release/Binaries/libcpprest.so -lboost_log -lboost_log_setup -lboost_random -lboost_system -lboost_thread -lboost_locale -lboost_regex -lboost_filesystem -lboost_chrono -lboost_date_time -lpthread -lssl -lcrypto -lxml++-2.6 -lxml++-2.6 -lxml2 -lglibmm-2.4 -lgobject-2.0 -lsigc-2.0 -lglib-2.0 -luuid -lglibmm-2.4 -lglib-2.0 -Wl,-rpath,/home/sasmita/azure-storage-cpp/Microsoft.WindowsAzure.Storage/build.release/Binaries:/home/sasmita/casablanca/Release/build.release/Binaries

query.o: query.cpp
	$(CPP) -c -DBOOST_LOG_DYN_LINK -std=c++11 -fno-strict-aliasing -O3 -DNDEBUG -I/home/sasmita/azure-storage-cpp/Microsoft.WindowsAzure.Storage/samples/TablesGettingStarted/. -I/home/sasmita/azure-storage-cpp/Microsoft.WindowsAzure.Storage/samples/SamplesCommon -I/home/sasmita/azure-storage-cpp/Microsoft.WindowsAzure.Storage/includes -I/home/sasmita/casablanca/Release/include -I/usr/include/libxml++-2.6 -I/usr/lib/libxml++-2.6/include -I/usr/include/libxml2 -I/usr/include/glibmm-2.4 -I/usr/lib/x86_64-linux-gnu/glibmm-2.4/include -I/usr/include/sigc++-2.0 -I/usr/lib/x86_64-linux-gnu/sigc++-2.0/include -I/usr/include/glib-2.0 -I/usr/lib/x86_64-linux-gnu/glib-2.0/include query.cpp

clean:
	rm query.o query
