/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    
    if (!root) {
        return 0;
    }
    
    var queue = [root], size = 1, maxSize = 0;
    
    while (queue.length) {
        size = queue.length;
        while (size > 0) {
            var node = queue.splice(0, 1)[0];
            if (!node) {
                continue;
            }
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
            -- size;
        }
        ++ maxSize;
    }
    
    return maxSize;
};
