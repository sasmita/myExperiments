from azure.storage import TableService, Entity

table_service = TableService(account_name='upmsample', account_key='5YC/6x9KL56rtaAUAZMgGsREDvvPHYJIMqH3z1c9IgQLy0qMP+Awr+7j51Tfzniczj//6jn7lvYQutD/mHm6dw==')

while True:
	x = raw_input("Enter 1 or 0: ");
	task = {'PartitionKey': 'ledswitch', 'RowKey': '1', 'state' :int(x)}
	table_service.update_entity('table1', 'ledswitch', '1', task)

