#!/usr/bin/env python3
"""Creates an asyncio Task to run wait_random with the given max_delay."""


import asyncio

wait_random = __import__("1-concurrent_coroutines").wait_random


def task_wait_random(max_delay: int) -> asyncio.Task:
    """
    Creates an asyncio Task to run wait_random with the given max_delay.

    Args:
        max_delay (int): The maximum delay for wait_random.

    Returns:
        asyncio.Task: The asyncio Task for the wait_random coroutine.
    """
    finish = asyncio.create_task(wait_random(max_delay))
    return finish
