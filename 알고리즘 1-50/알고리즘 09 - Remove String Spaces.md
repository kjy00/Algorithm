# Q)

Simple, remove the spaces from the string, then return the resultant string.

For C, you must return a new dynamically allocated string.
# A)
```c
#include <stdlib.h>

char *no_space(const char *str_in) 
{
  int len = 0;
  int i = 0;
  
  while(str_in[i] != 0)
  {
    if (str_in[i] == ' ')
      ;
    else
      len++;
    i++;
  }
  
  char *result = (char *)malloc (len + 1);
  
  i = 0;
  while (*str_in)
  {
    if (*str_in == ' ')
      ;
    else
      {
      result[i]= *str_in;
      i++;
      }
    str_in++;
  }
  result[i] = '\0';
  return result;
}
