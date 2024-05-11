def solution(sequence):
    seq1 = sequence.copy()
    seq2 = sequence.copy()
    seq2[0] *= -1
    for i in range(1, len(seq1)):
        p = [1, -1]
        seq1[i] = seq1[i] * p[i % 2] + seq1[i - 1]
        seq2[i] = seq2[i] * p[i % 2] * -1 + seq2[i - 1]
    return max(max(seq1) - min(seq1), max(seq2) - min(seq2), max(seq1), max(seq2))