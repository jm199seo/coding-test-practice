#include <bits/stdc++.h>

using namespace std;

// https://programmers.co.kr/learn/courses/30/lessons/12985
int solution(int n, int a, int b)
{
    int answer = 1;
    if (a > b) {
        int temp = b;
        b = a;
        a = temp;
    }

    while (n / 2 > 1) {
        n  = n / 2;
        if (b - a < 2) {
            if (a % 2 == 0) {
                a = ceil(float(a) / 2);
                b = ceil(float(b) / 2);
                answer++;
            }
            else {
                return answer;
            }
        }
        else {
            a = ceil(float(a) / 2);
            b = ceil(float(b) / 2);
            answer++;
        }
    }
    
    return answer;
}

int main() {
    int answer = solution(8, 4, 7);
    cout << "answer: " << answer << endl;
}
