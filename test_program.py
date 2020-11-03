import random, sys

def estimate_pi(n) :
	point_circle = 0
	point_total = 0
	for _ in range(n) :
		x = random.uniform(0, 1)
		y = random.uniform(0, 1)
		if x**2 + y**2 < 1 :
			point_circle += 1
		point_total += 1
	return 4 * point_circle/point_total

if '__init__' == '__main__' :
	estimate_pi(n)
