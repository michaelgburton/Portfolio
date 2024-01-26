def sum_for_loop(max):
    sum = 0
    for i in range(1, max+1):
        sum += i

    return sum

def generate_sequence(max):
    sequence = []
    for i in get_sequence_generator(max):
        sequence.append(i)
    return sequence


def get_sequence_generator(max):
    i = 1
    while i <= max:
        yield i
        i = i+1
        
