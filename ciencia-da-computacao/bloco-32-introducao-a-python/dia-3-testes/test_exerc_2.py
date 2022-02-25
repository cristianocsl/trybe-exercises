import pytest
from exerc_2 import converte_para_numero


def test_frase_deve_ter_ao_menos_um_caracter():
    with pytest.raises(ValueError):
        converte_para_numero("")


def test_frase_deve_ter_no_maximo_30_caracter():
    big_phrase = "1111111111" "1111111111" "1111111111" "1"  # 10 chars
    with pytest.raises(ValueError):
        converte_para_numero(big_phrase)


def test_abc_converte_em_2():
    assert converte_para_numero("ABC") == "222"


def test_def_converte_em_3():
    assert converte_para_numero("DEF") == "333"


def test_def_converte_em_4():
    assert converte_para_numero("GHI") == "444"


def test_def_converte_em_5():
    assert converte_para_numero("JKL") == "555"


def test_def_converte_em_6():
    assert converte_para_numero("MNO") == "666"


def test_def_converte_em_7():
    assert converte_para_numero("PQRS") == "7777"


def test_def_converte_em_8():
    assert converte_para_numero("TUV") == "888"


def test_def_converte_em_9():
    assert converte_para_numero("WXYZ") == "9999"


def test_def_converte_mantem_0_e_1_10():
    assert converte_para_numero("0-1") == "0-1"
