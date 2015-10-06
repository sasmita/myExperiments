from azure.storage import TableService, Entity

table_service = TableService(account_name='upmsample', account_key='5YC/6x9KL56rtaAUAZMgGsREDvvPHYJIMqH3z1c9IgQLy0qMP+Awr+7j51Tfzniczj//6jn7lvYQutD/mHm6dw==')

table_service.create_table('ledtracktable')

task = table_service.get_entity('ledtracktable', 'ledswitch', '1')
print(task.state)


