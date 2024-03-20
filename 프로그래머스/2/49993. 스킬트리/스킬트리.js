function solution(skill, skill_trees) {
    return skill_trees.reduce((acc, cur) => {
        let skill_tmp = skill;
        for (let i = 0; i < cur.length; i++) {
            let skill_idx = skill_tmp.indexOf(cur[i]);
            if (skill_idx > -1) {
                if (skill_idx != 0) return acc;
                skill_tmp = skill_tmp.slice(0, skill_idx) + skill_tmp.slice(skill_idx + 1);
            }
        }
        return acc + 1;
    }, 0);
}