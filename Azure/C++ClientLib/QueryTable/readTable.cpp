#include "stdafx.h"
#include "samples_common.h"

#include<iostream>
using namespace std;

#include "was/storage_account.h"
#include "was/table.h"


namespace azure { namespace storage { namespace samples {

    void tables_getting_started_sample()
    {
        try
        {
            // Initialize storage account
            azure::storage::cloud_storage_account storage_account = azure::storage::cloud_storage_account::parse(storage_connection_string);

	    azure::storage::cloud_table_client table_client = storage_account.create_cloud_table_client();

	    // Retrieve a reference to a table 
            azure::storage::cloud_table table = table_client.get_table_reference(U("Customers"));
	
	     table_query query;
	     auto results = table.execute_query(query);

	     for (auto item : results)
	     {
		auto properties = item.properties();

		for (auto property : properties)
	     	{
	     		ucout << property.first << U ("=") << property.second.str() << endl;
	     	}
	     }

        }

        catch (const azure::storage::storage_exception& e)
        {
            ucout << U("Error: ") << e.what() << std::endl;

            azure::storage::request_result result = e.result();
            azure::storage::storage_extended_error extended_error = result.extended_error();
            if (!extended_error.message().empty())
            {
                ucout << extended_error.message() << std::endl;
            }
        }
        catch (const std::exception& e)
        {
            ucout << U("Error: ") << e.what() << std::endl;
        }
    }

}}} // namespace azure::storage::samples

int main(int argc, const char *argv[])
{
    azure::storage::samples::tables_getting_started_sample();
    return 0;
}

