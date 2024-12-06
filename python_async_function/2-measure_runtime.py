#!/usr/bin/env python3
"""
Measures the average time it takes to execute
wait_n n times with the given max_delay.
"""


import asyncio
import time


module = __import__("1-concurrent_coroutines")
wait_n = module.wait_n


def measure_time(n: int, max_delay: int) -> float:
    """
    Measures the average time it takes to execute
    wait_n n times with the given max_delay.

    Args:
        n (int): The number of times to call wait_n.
        max_delay (int): The maximum delay for each call to wait_n.

    Returns:
        float: The average time taken per execution of wait_n.
    """
    start_time = time.perf_counter()
    asyncio.run(wait_n(n, max_delay))
    end_time = time.perf_counter()
    total_time = end_time - start_time
    return total_time / n
