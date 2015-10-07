import hashlib
import hmac
import base64
from datetime import date

from time import gmtime, strftime

Account = "<accountname>"
Resource = "https://<account name>.table.core.windows.net/Tables"

VERB= "GET"
Date= strftime("%a, %d %b %Y %H:%M:%s GMT", gmtime())
CanonicalizedResource="/"+Account + "/" + Resource + "\n" + "comp" + ":" + "properties" + "\n" + "restype" + ":" + "service"

StringToSign=VERB + "\n" + "\n" + "\n" + Date + "\n" + CanonicalizedResource

message= bytes(StringToSign).encode('utf-8')

signature=base64.b64encode(hmac.new(message,digestmod=hashlib.sha256).digest())

print signature

