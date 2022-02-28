n = int(input())

Students = []

for i in range(n):
    input_data = input().split()
    Students.append((input_data[0], int(input_data[1])))

Students = sorted(Students, key=lambda student: student[1])

for student in Students:
    print(student[0], end=' '
