// https://leetcode.com/problems/path-sum/

/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    bool found = false;
    
    bool hasPathSum(TreeNode* root, int sum) {
        if (root == NULL) { return false; }
        // else if (root->left == NULL && root->right == NULL) {
        //     return root->val == sum;   
        // }
        // bool resultLeft = root->left && hasPathSumHelper(root->left, root->val, sum);
        // bool resultRight = root->right && hasPathSumHelper(root->right, root->val, sum);
        // cout << resultLeft << endl;
        // cout << resultRight << endl;
        // return resultLeft or resultRight;
        hasPathSumHelper(root, 0, sum);
        return found;
    }
    
    void hasPathSumHelper(TreeNode* root, int sum, int target) {
        if (!root) { return; }
        sum += root->val;
        if (isLeaf(root) && sum == target) { found = true; }
        hasPathSumHelper(root->left, sum, target);
        hasPathSumHelper(root->right, sum, target);
        
        // // leaf node
        // if (!root || isLeaf(root)) {
        //     printf("rootVal: %d - sum: %d\n", root->val, sum);
        //     cout << "sum at leaf: " << root->val + sum << endl;
        //     return root->val + sum == target;
        // }
        // if (root->left) {
        //     cout << "root has left" << root->left->val << endl;
        //     int res = hasPathSumHelper(root->left, sum + root->val, target);
        //     if (res && !root->left && !root->right) { return true; }
        // }
        // if (root->right) {
        //     cout << "root has right" << root->right->val << endl;
        //     int res = hasPathSumHelper(root->right, sum + root->val, target);
        //     if (res && !root->left && !root->right) { return true; }
        // }
        // printf("last return point rootVal: %d, sum: %d\n", root->val, sum);
        // return root->val + sum == target;
    }
    
    bool isLeaf(TreeNode* root) {
        return (root && !root->left && !root->right);
    }
};
