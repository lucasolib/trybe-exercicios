import pytest
import exercises


# FIZZ BUZZ


def test_fizz_buzz_when_n_equals_3():
    'Para o número 3 deve retornar Fizz'
    assert exercises.fizz_number(3) == [1, 2, 'Fizz']


def test_fizz_buzz_when_n_equals_5():
    'Para o número 5 deve retornar Buzz e para o 3 deve retornar Fizz'
    assert exercises.fizz_number(5) == [1, 2, 'Fizz', 4, 'Buzz']


def test_fizz_buzz_when_n_equals_15():
    'Para o número 15 deve retornar FizzBuzz'
    assert exercises.fizz_number(15) == [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7,
                                         8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14,
                                         'FizzBuzz']


# TRANSLATE TO NUMBER


EXPRESSION_INVALID_LENGTH = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVW'


def test_translate_to_number_ABC():
    'Retorna 2 três vezes para a string ABC'
    assert exercises.translate_to_number('ABC') == '222'


def test_translate_to_number_DEF():
    'Retorna 3 três vezes para a string DEF'
    assert exercises.translate_to_number('DEF') == '333'


def test_translate_to_number_GHI():
    'Retorna 4 três vezes para a string GHI'
    assert exercises.translate_to_number('GHI') == '444'


def test_translate_to_number_JKL():
    'Retorna 5 três vezes para a string JKL'
    assert exercises.translate_to_number('JKL') == '555'


def test_translate_to_number_MNO():
    'Retorna 6 três vezes para a string MNO'
    assert exercises.translate_to_number('MNO') == '666'


def test_translate_to_number_PQRS():
    'Retorna 7 quatro vezes para a string PQRS'
    assert exercises.translate_to_number('PQRS') == '7777'


def test_translate_to_number_TUV():
    'Retorna 8 três vezes para a string TUV'
    assert exercises.translate_to_number('TUV') == '888'


def test_translate_to_number_WXYZ():
    'Retorna 9 quatro vezes para a string WXYZ'
    assert exercises.translate_to_number('WXYZ') == '9999'


def test_translate_to_number_1():
    'Retorna 1- para a string 1-'
    assert exercises.translate_to_number('1-') == '1-'


def test_translate_to_number_error_length():
    'Retorna um erro para string longa de mais'
    with pytest.raises(ValueError, match="Expression with invalid length"):
        exercises.translate_to_number(EXPRESSION_INVALID_LENGTH)


def test_translate_to_number_error_invalid_number():
    'Retorna um erro para string com caractere inválido'
    with pytest.raises(ValueError, match="Invalid character"):
        exercises.translate_to_number('$$')


# VALIDATE EMAIL


USERNAME_ERROR = "Username should starts with a letter"
DIGIT_ERROR = "Username should contain only letters, "
"digits, dashes or underscores"
WEBSITE_ERROR = "Website should contain only letters, and digits"


def test_validate_email_error_first_letter_character():
    'Retorna um erro para email com caractere especial no início'
    with pytest.raises(ValueError, match=USERNAME_ERROR):
        exercises.validate_email('$teste@gmail.com')


def test_validate_email_error_has_digit():
    'Retorna um erro para um digito não válido no meio do email'
    with pytest.raises(ValueError, match=DIGIT_ERROR):
        exercises.validate_email('teste!!@gmail.com')


def test_validate_email_error_website_invalid():
    'Retorna um erro para um digito não válido no website do email'
    with pytest.raises(ValueError, match=WEBSITE_ERROR):
        exercises.validate_email('teste@gma!il.com')


def test_validate_email_error_extension_length():
    'Retorna um erro para um tamanho inválido na extensão'
    with pytest.raises(ValueError, match="Extension maximum length is 3"):
        exercises.validate_email('teste@gmail.coma')


def test_validate_email_success():
    'Retorna None para sucesso na validação'
    assert exercises.validate_email('test@gmail.com') is None


# FILTER VALID EMAILS


def test_filter_emails():
    'Retorna os emails cadastrados'
    emails = ["username@website.com"]
    expected_emails = ["username@website.com"]
    assert exercises.filter_valid_emails(emails) == expected_emails


def test_if_doesnt_have_emails_returns_empty_list():
    assert exercises.filter_valid_emails([]) == []


def test_invalid_emails_should_be_filtered():
    emails = ["inv*alid@website.com"]
    expected_emails = []
    assert exercises.filter_valid_emails(emails) == expected_emails


def test_valid_and_invalid_emails_returns_only_valids():
    emails = ["username@website.com", "inv*alid@website.com"]
    expected_emails = ["username@website.com"]
    assert exercises.filter_valid_emails(emails) == expected_emails
