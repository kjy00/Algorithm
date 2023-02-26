```js
function solution(s) {
    return s.toLowerCase().split(' ').map((e) => {
        if (e)
            return e[0].toUpperCase() + e.substring(1);
        return e;
    }).join(' ');
}
```
