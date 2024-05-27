import  Node  from "./Node.js"
class BST{
    #root

    constructor(){
        this.#root = null
    }
    add(value){
        if (this.#root == null){
            this.#root = new Node(value)
            if (this.#root != null ) return true
        }else
        return this.inserNode(this.#root,value)
    }
    inserNode(node,value){
        if(value.lastName < node.value.lastName){
            if(node.left == null){
                node.left = new Node(value)
                if(node.left != null) return true
            }else
            return this.inserNode(node.left,value)
        } else {
            if(node.right == null){
                node.right = new Node(value)
                if(node.right != null) return true
            }else
            return this.inserNode(node.right,value)
        }
    }
    search(lastName){
        return this.searchNode(this.#root,lastName)
    }

    searchNode(node,lastName){
        if(node == null || node.value.lastName === lastName)
            return node
        else if(lastName < node.value.lastName)
            return this.searchNode(node.left.lastName)
        else
        return this.searchNode(node.right.lastName)
    }

    min(){
        return this.minNode(this.#root);
    }

    minNode(node){
        if(node==null || node.left==null)
            return node
        else 
        return this.minNode(node.left)
    }
    
    max(){
        return this.maxNode(this.#root);
    }
    
    maxNode(node){
        if(node==null || node.right==null)
            return node
        else
            return this.maxNode(node.right)
    }
    
}

export default BST