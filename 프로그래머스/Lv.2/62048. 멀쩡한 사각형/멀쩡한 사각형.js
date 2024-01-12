function solution(w, h) {
    const GCD = () => {
        for (let i = Math.max(w, h); i > 0; i--)
            if (w % i === 0 && h % i === 0) return i;
    }
    return w * h - (w + h - GCD(w, h));
}