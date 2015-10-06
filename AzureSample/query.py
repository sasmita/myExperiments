from azure.storage import TableService, Entity

table_service = TableService(account_name='iotsample', account_key='0sPMrPyENjiCD8vZ2Y1+5cftT30GcTOafnL/Cdbt67WA0ajba5iEkBCiE9Ajb09UKAAa/cLz0WaYpORutxexeg==')

task = table_service.get_entity('tasktable', 'tasksSeattle', '1')
print(task.description)
print(task.priority)

task = table_service.get_entity('tasktable', 'tasksSeattle', '4')
print(task.description)
print(task.priority)




