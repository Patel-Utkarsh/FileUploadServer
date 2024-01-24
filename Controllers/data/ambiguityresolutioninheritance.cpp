#include <iostream>
using namespace std;

class basic {
    protected:
    int a;
    int b;

    public:
    void setter() {
        cout<<"Enter value of A: ";
        cin>>a;
        cout<<"Enter value of B: ";
        cin>>b;
    }

    void getter() {
        cout<<"Sum is "<<a+b;
        

    }
};

class derived : public basic {
    public:

    void setter() {
        basic :: setter();
    }
};


int main() {
    derived obj;
    obj.setter();
    obj.getter();


}