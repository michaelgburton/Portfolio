import unittest
from loops.for_loop import sum_for_loop, generate_sequence

class TestForLoops(unittest.TestCase):
    def test_plain_for(self):
        out = sum_for_loop(5)
        self.assertEqual(out, 1+2+3+4+5)

    def test_generator_for(self):
        out = generate_sequence(5)
        self.assertListEqual(out, [1,2,3,4,5])

        
if __name__ == '__main__':
    unittest.main()
