"""
Mesmo para um array bidimensional, o acesso a um elemento é O(1).
A complexidade de espaço também é O(1), pois não consideramos
a entrada em seu cálculo."""


def battleship(grid, line, column):
    if(grid[line][column] == 1):
        return True

    return False


# A função map itera sobre todo o array. O código, portanto, é O(n).

# const numbers = [0,1,2,3,4,5,6,7,8,9]
# numbers.map(n => n*n)

# /* As três funções iteram por todo o array, uma depois da outra.
# A ordem de complexidade, portanto, seria O(n + n + n), ou O(3n),
# mas dizemos O(n) para simplificar. */

# const numbers = [0,1,2,3,4,5,6,7,8,9]
# numbers.map(n => n*n)
#        .filter(n => n%2 === 0)
#        .reduce((acc, n) => acc + n)
