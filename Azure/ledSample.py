from azure.storage import TableService, Entity

table_service = TableService(account_name='upmsample', account_key='5YC/6x9KL56rtaAUAZMgGsREDvvPHYJIMqH3z1c9IgQLy0qMP+Awr+7j51Tfzniczj//6jn7lvYQutD/mHm6dw==')

table_service.create_table('table1')

task = {'PartitionKey': 'ledswitch', 'RowKey': '1', 'state' :1}
table_service.insert_entity('table1', task)


