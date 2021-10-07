# Q)

You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.

# A)
```c
#include <stddef.h>

int positive_sum(const int *values, size_t count)
{
   int result = 0;
  int i = 0;
  for (i = 0 ; i < count; i++ )
  {
    if (values[i] > 0)
      result += values[i];
  }
  return result;
}
