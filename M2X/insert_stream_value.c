/* 
   Author : Sisinty Sasmita Patra
*/

#include <stdio.h>
#include <stdlib.h>
#include <time.h>

#include "serializer.h"

#include "m2x.h"
#include "device.h"

const char *M2X_KEY = "CHANGE_THIS_TO_API_KEY"; 

int iso8601_time(char* buf, int len)
{
  time_t t;

  t = time(NULL);
  return strftime(buf, len, "%Y-%m-%dT%H:%M:%SZ", gmtime(&t));
}

const char* generate_json()
{
  json_context *json = NULL;
  char *json_str, buf[128];
  int v; 

  json = json_start_object();

  iso8601_time(buf, 128);
  json = json_pack_key(json, "values");
  
  json = json_pack_array_start(json);

  json = json_pack_object_start(json);

  json = json_pack_key(json, "timestamp");
  json = json_pack_string(json, buf);

  json = json_pack_key(json, "value");

  v = 200;
  sprintf(buf, "%d", v);
  json = json_pack_value(json, buf);

  json = json_pack_object_end(json);

  json = json_pack_array_end(json);
  json_str = json_end_object(json);

  printf("JSON String: %s", json_str);

  return json_str;
}

int main()
{
  m2x_context *ctx = NULL;
  m2x_response response;

  ctx = m2x_open(M2X_KEY);

  /* Show full verbose/debug information */
  m2x_set_verbose(ctx, 1);

  printf("Stream Post Values:\n");

  response = m2x_device_stream_post_values(ctx, "CHANGE_THIS_TO_DEVICE_ID", 
                                           "temp", 
					generate_json());

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
