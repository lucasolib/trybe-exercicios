# 1

a = 10
b = 5

print(a + b)
print(a - b)
print(a * b)
print(a / b)
print(a // b)
print(a ** b)
print(a % b)

# 2
hours = 6
minutes = hours * 60
seconds = minutes * 60

print(hours)
print(minutes)
print(seconds)

# 3

# A operação funciona normalmente mas o linter aponta um erro.

# 4

quantity = 60
priceInt = 24.20
descount = 24.20 * 40 / 100
price = priceInt - descount
transport = 3 + (0.75 * (quantity - 1))
print(quantity * price + transport)

# 5

trybe_course = ["Introdução", "Front-end", "Back-end"]
trybe_course.append("Ciência da Computação")

print(trybe_course)

# 6

trybe_course[0] = "Fundamentos"
print(trybe_course)

# 7

var = set({"Lucas"})
print(var)

# 8

info = {
  "personagem": "Margarida",
  "origem": "Pato Donald",
  "nota": "Namorada do personagem principal nos quadrinhos do Pato Donald",
}

info["recorrente"] = "Sim"
print(info)

# 9

del info["origem"]
print(info)

# 10

# Estrutura Tuple

# 11

mock_array = [20, 1, 4, 20, 3, 1, 1]
freq_dict = {}

for item in mock_array:
    if (item in freq_dict):
        freq_dict[item] += 1
    else:
        freq_dict[item] = 1

for key, valor in freq_dict.items():
    print(f"{key} : {valor}")

# 12

mock_number = 5
counter = 1
result = 1
while counter <= mock_number:
    result = result * counter
    counter += 1

print(result)

# 13

ratings = [6, 8, 5, 9, 10]
new_ratings = []

for rate in ratings:
    new_ratings.append(rate * 10)

print(new_ratings)

# 14

for rate in new_ratings:
    if (rate % 3 == 0):
        print(f'{rate} é divisível por 3')
