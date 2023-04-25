import math

# 1


def maior(int1, int2):
    if (int1 > int2):
        return print(f'{int1} é o maior número')
    elif (int2 > int1):
        return print(f'{int2} é o maior número')
    else:
        return print(f'{int1} e {int2} são os mesmos números')


# 2


def media_aritmetica(numbers):
    fullsum = 0
    for number in numbers:
        fullsum += number
    print(fullsum / number)


# 3


def impress_square(n):
    if (1 < n < 10):
        counter = 0
        while (counter < n):
            print(n * '*')
            counter += 1


# 4


def biggest_name(names):
    big_name = names[0]
    for name in names:
        if (len(name) > len(big_name)):
            big_name = name
    print(big_name)


# 5


def can_of_paint(wall_size):
    TOTAL_PAINT = 54
    PRICE = 80
    if (wall_size < TOTAL_PAINT):
        print((1, PRICE))
    else:
        cans = wall_size / TOTAL_PAINT
        full_cans = math.ceil(cans)
        print((full_cans, PRICE * full_cans))


# 6


def triangle_type(side1, side2, side3):
    if (side1 + side2 > side3):
        if (side1 == side2 == side3):
            print('Este é um triângulo Equilátero')
        elif (side1 != side2 != side3):
            print('Este é um triângulo Escaleno')
        else:
            print('Este é um triângulo Isósceles')
    else:
        print('Não é um triângulo')
