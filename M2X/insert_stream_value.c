
/* 
   Author : Sisinty Sasmita Patra
*/

#include <stdio.h>

#include "m2x.h"
#include "device.h"

const char *M2X_KEY = "CHANGE_THIS_TO_API_KEY"; 

int main()
{
  m2x_context *ctx = NULL;
  m2x_response response;

  /* Create Context */
  ctx = m2x_open(M2X_KEY);

  /* Show full verbose/debug information */
  m2x_set_verbose(ctx, 1);

  printf("Stream Post Values:\n");

  /* post the values to the stream */
  response = m2x_device_stream_post_values(ctx, "CHANGE_THIS_TO_DEVICE_ID", 
                                           "temp", 
					"{\"values\": [{\"timestamp\": \"2015-10-01T12:00:00Z\", \"value\": 80}] }");

  printf("Status code: %d\n", response.status);

  if (m2x_is_success(&response) && response.raw) {
    printf("successs:\n");
    printf("%s\n", response.raw);
  }
  else
  {
	printf("error:\n");
        printf("%s\n", response.raw);
  }

  m2x_release_response(&response);
  m2x_close(ctx);
  return 0;
}
