from azure.storage import TableService, Entity

table_service = TableService(account_name='iotsample', account_key='0sPMrPyENjiCD8vZ2Y1+5cftT30GcTOafnL/Cdbt67WA0ajba5iEkBCiE9Ajb09UKAAa/cLz0WaYpORutxexeg==')

table_service.create_table('tasktable')

task10 = {'PartitionKey': 'tasksSeattle', 'RowKey': '4', 'description' : 'Buy clothes', 'priority' : 100}
table_service.insert_entity('tasktable', task10)

