// https://leetcode.com/problems/employee-importance/submissions/
/*
// Definition for Employee.
class Employee {
public:
    int id;
    int importance;
    vector<int> subordinates;
};
*/

class Solution {
public:
    bool visited[2001];
    map<int, Employee*> mp;
    
    int getImportance(vector<Employee*> employees, int id) {
        // traverse employee vector and find all subordinates of each employee
        // map<int, set<int>> employeeList;
        // // cout << employeeList.first << endl;
        // int *visited = new int[employees.size()];
        // memset(visited, 0, sizeof(visited) + 1);
        // cout << visited[0];
        // memset(visited, 0, sizeof(visited));
        // for (Employee *e : employees) {
        // for (int i = 0; i < numEmployees; i++) {
        //     // cout << e->id << endl;
        //     visited[i] = 0;
        //     // visited[e->id] = 0;
        // }
        for (auto e : employees) {
            mp[e->id] = e;
        }
        
        return getImportanceHelper(id, 0);
    }
    
    int getImportanceHelper(int id, int total) {
        if (visited[id] == 1) {
            return 0;
        }
        visited[id] = 1;
        // add current employee total
        int current = mp[id]->importance;
        // get all subordinates
        vector<int> subs = mp[id]->subordinates;
        
        for (int subordinateId : subs) {
            printf("subordinateID: %d\n", subordinateId);
            current += getImportanceHelper(subordinateId, 0);
        }
        return current;
    }
};