#-------------------------------------------------
#
# Project created by QtCreator 2015-10-20T16:19:02
#
#-------------------------------------------------

QT       += core gui

greaterThan(QT_MAJOR_VERSION, 4): QT += widgets

TARGET = Factorial
TEMPLATE = app


INCLUDEPATH += /home/sasmita/azure-storage-cpp/Microsoft.WindowsAzure.Storage/samples/TablesGettingStarted/
INCLUDEPATH += /home/sasmita/azure-storage-cpp/Microsoft.WindowsAzure.Storage/samples/SamplesCommon
INCLUDEPATH += /home/sasmita/azure-storage-cpp/Microsoft.WindowsAzure.Storage/includes
INCLUDEPATH += /home/sasmita/casablanca/Release/include
INCLUDEPATH += /usr/include/libxml++-2.6
INCLUDEPATH += /usr/lib/libxml++-2.6/include
INCLUDEPATH += /usr/include/libxml2
INCLUDEPATH += /usr/include/glibmm-2.4
INCLUDEPATH += /usr/lib/x86_64-linux-gnu/glibmm-2.4/include
INCLUDEPATH += /usr/include/sigc++-2.0
INCLUDEPATH += /usr/lib/x86_64-linux-gnu/sigc++-2.0/include
INCLUDEPATH += /usr/include/glib-2.0 -I/usr/lib/x86_64-linux-gnu/glib-2.0/include

AZURE_BINARIES = /home/sasmita/azure-storage-cpp/Microsoft.WindowsAzure.Storage/build.release/Binaries

LIBS += -L /home/sasmita/azure-storage-cpp/Microsoft.WindowsAzure.Storage/build.release/Binaries/ -lazurestorage

LIBS += -lsamplescommon

LIBS += /home/sasmita/casablanca/Release/build.release/Binaries/libcpprest.so -lboost_log -lboost_log_setup -lboost_random -lboost_system -lboost_thread -lboost_locale -lboost_regex -lboost_filesystem -lboost_chrono -lboost_date_time -lpthread -lssl -lcrypto -lxml++-2.6 -lxml++-2.6 -lxml2 -lglibmm-2.4 -lgobject-2.0 -lsigc-2.0 -lglib-2.0 -luuid -lglibmm-2.4 -lglib-2.0
QMAKE_CXXFLAGS += -std=c++0x

SOURCES += main.cpp\
        mainwindow.cpp \
    ../query.cpp

HEADERS  += mainwindow.h

FORMS    += mainwindow.ui
