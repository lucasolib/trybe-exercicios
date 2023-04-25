import random
import json
import csv


# 1


def staircase_inverted(name):
    length = len(name)
    new_name = name
    while (length > 0):
        print(new_name)
        new_name = new_name[:-1]
        length -= 1


# 2 && 3


def word_shuffled():
    words = open("words.txt", mode="r")
    content = [word.strip() for word in words]
    words.close()
    tryes = 0
    winned = False
    random_word = random.choice(content)
    scrambled_word = "".join(random.sample(random_word, len(random_word)))
    while (tryes <= 2):
        inputed_word = input(f'Advinhe a palavra: {scrambled_word} -> ')
        tryes += 1
        if (random_word == inputed_word):
            tryes = 4
            winned = True
    if (winned):
        print(f'A palavra era {random_word} e você venceu')
    else:
        print(f'A palavra era {random_word} e você perdeu')


# 4


def retrieve_books(file):
    return json.load(file)


def count_books_by_categories(books):
    categories = {}
    for book in books:
        for category in book["categories"]:
            if not categories.get(category):
                categories[category] = 0
            categories[category] += 1
    return categories


def calculate_percentage_by_category(book_count_by_category, total_books):
    return [
        [category, num_books / total_books]
        for category, num_books in book_count_by_category.items()
    ]


def write_csv_report(file, header, rows):
    writer = csv.writer(file)
    writer.writerow(header)
    writer.writerows(rows)


if __name__ == "__main__":
    with open("books.json") as file:
        books = retrieve_books(file)

    book_count_by_category = count_books_by_categories(books)

    number_of_books = len(books)
    books_percentage_rows = calculate_percentage_by_category(
        book_count_by_category, number_of_books
    )

    header = ["categoria", "percentagem"]
    with open("report.csv", "w") as file:
        write_csv_report(file, header, books_percentage_rows)
