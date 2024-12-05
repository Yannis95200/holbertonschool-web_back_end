#!/usr/bin/env python3

"""return product of n and multiplier"""

from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """return product of n and multiplier"""
    def multiply(n: float) -> float:
        """return product of n and multiplier"""
        return n * multiplier
    return multiply
