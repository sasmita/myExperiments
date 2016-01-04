#include <stdio.h>
#include <stdlib.h>
#include <time.h>

#include "serializer.h"

int iso8601_time(char* buf, int len)
{
  time_t t;

  t = time(NULL);
  return strftime(buf, len, "%Y-%m-%dT%H:%M:%SZ", gmtime(&t));
}

int main()
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

  v = 70;
  sprintf(buf, "%d", v);
  json = json_pack_value(json, buf);

  json = json_pack_object_end(json);

  json = json_pack_array_end(json);
  json_str = json_end_object(json);

  printf("JSON String: %s", json_str);
  free(json_str);
}
