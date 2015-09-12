#include "mainwindow.h"
#include <QApplication>

int main(int argc, char *argv[])
{
    QApplication a(argc, argv);
    MainWindow w;

    w.setName("Sasmita Patra");
    w.show();

    return a.exec();
}
