#include "mainwindow.h"
#include "ui_mainwindow.h"

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
    int x;
    int res = 1;

    x = ui->spinBox->value();

    for(int i = x; i > 1; i--)
        res = res * i;

    ui->Output->setNum(res);
}
