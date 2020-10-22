#include <bits/stdc++.h>

using namespace std;

// https://programmers.co.kr/learn/courses/30/lessons/12981
vector<int> solution(int n, vector<string> words) {
    vector<int> answer = { 0, 0 };
    
    vector<string> done;
    
    string lastWord = words.front();
    done.push_back(lastWord);
    
    for (int i = 1; i < words.size(); i++) {
        // 탈락자
        if (lastWord.back() != words[i].front() || find(done.begin(), done.end(), words[i]) != done.end()) {
            answer[0] = (i + 1) % n == 0 ? n : (i + 1) % n;
            answer[1] = ceil((i + 1) / float(n));
            return answer;
        }
        done.push_back(words[i]);
        lastWord = words[i];
    }
    

    return answer;
}