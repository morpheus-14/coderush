from submission import Solution, TreeNode
from typing import List
from collections import deque

tester = Solution()

def init():
    tests = [
        # default test cases
        { 'root1': [1,3,2,5], 'root2': [2,1,3,None,4,None,7] },
        { 'root1': [1], 'root2': [1,2] }

        # Other random test cases

        # Edge cases
    ]

    test_trees = []
    for test in tests:
        print(f"n = {test} --> {tree_to_list(tester.mergeTrees(list_to_tree(test['root1']), list_to_tree(test['root2'])))}")


def list_to_tree(arr):
    if not arr:
        return None

    root = TreeNode(arr[0])
    queue = deque([root])
    i = 1

    while queue and i < len(arr):
        node = queue.popleft()
        if node:
            # Left child
            if i < len(arr) and arr[i] is not None:
                node.left = TreeNode(arr[i])
                queue.append(node.left)
            i += 1

            # Right child
            if i < len(arr) and arr[i] is not None:
                node.right = TreeNode(arr[i])
                queue.append(node.right)
            i += 1

    return root


def tree_to_list(root):
    if not root:
        return []

    result = []
    queue = deque([root])

    while queue:
        node = queue.popleft()
        if node:
            result.append(node.val)
            queue.append(node.left)
            queue.append(node.right)
        else:
            result.append(None)

    # Trim trailing Nones
    while result and result[-1] is None:
        result.pop()

    return result

init()