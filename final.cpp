#include <iostream>
using namespace std;
 
class Base final {
    // body
};
 
// Compile error because base class is final
class Derived : public Base {
    // body
};
 
int main() {
  return 0;
}