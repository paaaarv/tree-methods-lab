

function inOrder(currentNode){
    if(currentNode.left){
        inOrder(currentNode.left)
    }
    console.log(currentNode.data)
    if(currentNode.right){
        inOrder(currentNode.right)
    }
}

function findOrAdd(root, currentNode){
    if(root.data === currentNode.data){
        return true
    }
    else if(currentNode.data < root.data){
        if(root.left == null){
            root.left= currentNode
        }else{
            return findOrAdd(root.left, currentNode)
        }
    }else{
        if(root.right == null){
            root.right = currentNode
        }else{
            return findOrAdd(root.right, currentNode)
        }
    }
}

function max(node){
    if(node.right){
        return max(node.right)
    }else{
        return node
    }
}

function min(node){
    if(node.left){
        return min(node.left)
    }else{
        return node
    }
}
