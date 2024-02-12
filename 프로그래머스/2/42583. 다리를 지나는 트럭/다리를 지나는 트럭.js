function solution(bridge_length, weight, truck_weights) {
    let answer = 0;
    let bridge = new Array(bridge_length).fill(0);
    let bridge_total_w = 0;
    while (truck_weights.length || bridge_total_w > 0) {
        answer++;
        let w = bridge.shift();
        bridge.push(0);
        bridge_total_w -= w;
        if (bridge_total_w + truck_weights[0] <= weight 
            && !bridge[bridge_length - 1]) {
            let t = truck_weights.shift();
            bridge_total_w += t;
            bridge[bridge_length - 1] = t;
        }
    }
    return answer;
}