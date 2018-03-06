pragma solidity ^0.4.4;

contract A {
}

contract B {
  uint x;
}

contract C {
  uint x;

  function C(uint _x) {
    x = _x;
  }

  function get() constant returns (uint) {
    return x;
  }
  
  function set(uint _x) {
    x = _x;
  }
}

contract D {
  uint[100] x;

  function D() {
    for (uint i=0; i<x.length; i++) {
      x[i] = i;
    }
  }
}


contract Factory {
  uint a_count;
  uint b_count;
  uint c_count;
  uint d_count;

  function createA() returns (uint) {
    A a = new A();
    return ++a_count;
  }

  function createB() returns (uint) {
    B b = new B();
    return ++b_count;
  }

  function createC() returns (uint) {
    C c = new C(1);
    return ++c_count;
  }

  function createD() returns (uint) {
    D d = new D();
    return ++d_count;
  }
}

contract Storage {
  uint[] x;

  function grow() returns (uint) {
    for (uint i=0; i<100; i++) {
      x.push(1);
    }
    return x.length;
  }
}
