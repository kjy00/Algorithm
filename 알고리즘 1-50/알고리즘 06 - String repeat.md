# Q)

Write a function called repeatStr which repeats the given string string 
exactly n times.

repeatStr(6, "I") // "IIIIII" \
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"
# A)
```c
#include <string.h>
#include <stdlib.h>
char *repeat_str(size_t count, const char *src) {
  unsigned int i = 0;
  char *str = (char *)malloc(strlen(src) * count +1);
  for(i = 0;i < count; i++)
  {
    strcpy(str + strlen(src)*i, src);
  }

  return str;
}
