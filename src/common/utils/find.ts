import { Tree } from "../types/tree"

const findNodeByKey = (tree: Tree, key: string): Tree | null => {
  if (tree.key === key) {
    return tree
  } else if (tree.children) {
    for (let i = 0; i < tree.children.length; i++) {
      const node = findNodeByKey(tree.children[i], key)
      if (node) {
        return node
      }
    }
  }
  return null
}

export {
    findNodeByKey
}