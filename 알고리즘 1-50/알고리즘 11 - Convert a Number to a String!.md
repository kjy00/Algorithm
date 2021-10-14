# Q)

We need a function that can transform a number into a string.

What ways of achieving this do you know?

In C, return a dynamically allocated string that will be freed by the test suite.

## Examples:
    123 --> "123"
    999 --> "999"
# A)
```c
#include <stdlib.h>
const char* number_to_string(int number) {
  int len = 0;
  int tmp = number;
  int neg = 0;
  char *result;
  
  if(number < 0)
  {
    number = -number;
    neg = 1;
  }
  
  while(tmp != 0)
  {
     tmp /= 10;
      len++;
  }
  
  if (neg == 1)
  {
    result = (char *)malloc(len + 1 + 1);
    result[0] = '-';
    result[len + 1] = '\0';
  }
  else
  {
    result = (char *)malloc(len + 1);
    result[len] = '\0';
    result[0]='0';
    len--;
  }  
  while (number != 0)
  {
    result[len] = number % 10 + '0';
    number /= 10;
    len--;
  }
  return result;
}
