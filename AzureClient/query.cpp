#include "stdafx.h"

#include<iostream>
#include <string>
using namespace std;

#include "was/storage_account.h"
#include "was/table.h"
#include "was/common.h"

utility::string_t storage_connection_string(U("DefaultEndpointsProtocol=https;AccountName=iotvendingmachine;AccountKey=hk9SEM9J/PMvxlWiWA+uQWToMzM7QADAcKPBkjlsBp9OTPv2DbPLvrcxDjWXwzU+pqWyII7Ps78dY9YB4DAIXg=="));

int gCokeCount = -1;
int gPepsiCount = -1;

int getCokeCount(void)
{
    return gCokeCount;
}

void updateTableEntries()
{
    // Initialize storage account
    azure::storage::cloud_storage_account storage_account = azure::storage::cloud_storage_account::parse(storage_connection_string);

    // Create the table client
    azure::storage::cloud_table_client table_client = storage_account.create_cloud_table_client();

    // Retrieve a reference to a table 
    azure::storage::cloud_table table = table_client.get_table_reference(U("Events"));

    azure::storage::table_query query;

    auto results = table.execute_query(query);

    for (auto item : results)
    {
        auto properties = item.properties();
        
        int i = 0;
        int val = -1;
        for (auto property : properties)
        {
	    if(i == 1)
	    {
                val = stoi(property.second.str());
	    }

	    if(i == 2)
	    {	
		if(!property.second.str().compare("Coke"))
		{
			gCokeCount = val;
                        // TODO Remove this line // Fix the table
                        return;
		}
		else if(!property.second.str().compare("Pepsi"))
		{
			gPepsiCount = val;
		}
	   }
	   i++;
	}
    }
}

int main(int argc, const char *argv[])
{
    updateTableEntries();
    std::cout << "Coke count: " <<  getCokeCount() << std::endl;
    return 0;
}

