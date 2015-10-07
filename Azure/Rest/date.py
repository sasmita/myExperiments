from datetime import date

from time import gmtime, strftime

print strftime("%a, %d %b %Y %H:%M:%s GMT", gmtime())
