#include "mainwindow.h"
#include "ui_mainwindow.h"

int factorial (int n)
{
    int res = 1;

    for(int i = n; i > 1; i--)
        res = res * i;

    return res;
}

MainWindow::MainWindow(QWidget *parent) :
    QMainWindow(parent),
    ui(new Ui::MainWindow)
{
    ui->setupUi(this);
}

MainWindow::~MainWindow()
{
    delete ui;
}

void MainWindow::on_pushButton_released()
{
    int X;

    X = ui->spinBox->value();
    X = factorial(X);
    ui->Output->setNum(X);
}
