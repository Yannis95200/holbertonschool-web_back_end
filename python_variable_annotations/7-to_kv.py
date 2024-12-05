#!/usr/bin/env python3

"""return k, v*v"""

from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """return k, v*v"""
    return (k, v * v)
