/* eslint-disable no-unused-vars */
import { Contract } from '../../src/lib/index';

type CustomType = {
  foo: uint<16>,
  bar: string
}

class ABITestStaticArray extends Contract {
  staticArray(): uint64 {
    const a: StaticArray<uint64, 3> = [11, 22, 33];

    return a[1];
  }
}

class ABITestReturnStaticArray extends Contract {
  returnStaticArray(): StaticArray<uint64, 3> {
    const a: StaticArray<uint64, 3> = [11, 22, 33];

    return a;
  }
}

class ABITestStaticArrayArg extends Contract {
  staticArrayArg(a: StaticArray<uint64, 3>): uint64 {
    return a[1];
  }
}

class ABITestNonLiteralStaticArrayElements extends Contract {
  nonLiteralStaticArrayElements(): uint64 {
    const n1 = 11;
    const n2 = 22;
    const n3 = 33;
    const a: StaticArray<uint64, 3> = [n1, n2, n3];

    return a[1];
  }
}

class ABITestMixedStaticArrayElements extends Contract {
  mixedStaticArrayElements(): uint64 {
    const n1 = 3;
    const n2 = 4;
    const n3 = 5;
    const a: StaticArray<uint64, 9> = [0, 1, 2, n1, n2, n3, 6, 7, 8];

    return a[1] + a[4] + a[7];
  }
}

class ABITestNonLiteralStaticArrayAccess extends Contract {
  nonLiteralStaticArrayAccess(): uint64 {
    const a: StaticArray<uint64, 3> = [11, 22, 33];
    const n = 2;

    return a[n];
  }
}

class ABITestSetStaticArrayElement extends Contract {
  setStaticArrayElement(): uint64 {
    const a: StaticArray<uint64, 3> = [11, 22, 33];

    a[1] = 222;

    return a[1];
  }
}

class ABITestStaticArrayInStorageRef extends Contract {
  gRef = new GlobalStateKey<StaticArray<uint64, 3>>({ key: 'gRef' });

  lRef = new LocalStateKey<StaticArray<uint64, 3>>({ key: 'lRef' });

  bRef = new BoxKey<StaticArray<uint64, 3>>({ key: 'bRef' });

  gMap = new GlobalStateMap<bytes, StaticArray<uint64, 3>>();

  lMap = new LocalStateMap<bytes, StaticArray<uint64, 3>>();

  bMap = new BoxMap<bytes, StaticArray<uint64, 3>>();

  @handle.optIn
  staticArrayInStorageRef(): StaticArray<uint64, 3> {
    const a: StaticArray<uint64, 3> = [11, 22, 33];

    this.gRef.set(a);
    this.lRef.set(this.txn.sender, a);
    this.bRef.set(a);

    const ret: StaticArray<uint64, 3> = [
      this.gRef.get()[1],
      this.lRef.get(this.txn.sender)[1],
      this.bRef.get()[1],
    ];

    return ret;
  }
}

class ABITestUpdateStaticArrayInStorageRef extends Contract {
  gRef = new GlobalStateKey<StaticArray<uint64, 3>>({ key: 'gRef' });

  lRef = new LocalStateKey<StaticArray<uint64, 3>>({ key: 'lRef' });

  bRef = new BoxKey<StaticArray<uint64, 3>>({ key: 'bRef' });

  gMap = new GlobalStateMap<bytes, StaticArray<uint64, 3>>();

  lMap = new LocalStateMap<bytes, StaticArray<uint64, 3>>();

  bMap = new BoxMap<bytes, StaticArray<uint64, 3>>();

  @handle.optIn
  updateStaticArrayInStorageRef(): StaticArray<uint64, 3> {
    const a: StaticArray<uint64, 3> = [11, 22, 33];

    this.gRef.set(a);
    this.lRef.set(this.txn.sender, a);
    this.bRef.set(a);

    this.gRef.get()[1] = 111;
    this.lRef.get(this.txn.sender)[1] = 222;
    this.bRef.get()[1] = 333;

    const ret: StaticArray<uint64, 3> = [
      this.gRef.get()[1],
      this.lRef.get(this.txn.sender)[1],
      this.bRef.get()[1],
    ];

    return ret;
  }
}

class ABITestStaticArrayInStorageMap extends Contract {
  gRef = new GlobalStateKey<StaticArray<uint64, 3>>({ key: 'gRef' });

  lRef = new LocalStateKey<StaticArray<uint64, 3>>({ key: 'lRef' });

  bRef = new BoxKey<StaticArray<uint64, 3>>({ key: 'bRef' });

  gMap = new GlobalStateMap<bytes, StaticArray<uint64, 3>>();

  lMap = new LocalStateMap<bytes, StaticArray<uint64, 3>>();

  bMap = new BoxMap<bytes, StaticArray<uint64, 3>>();

  @handle.optIn
  staticArrayInStorageMap(): StaticArray<uint64, 3> {
    const a: StaticArray<uint64, 3> = [11, 22, 33];

    this.gMap.set('gMap', a);
    this.lMap.set(this.txn.sender, 'lMap', a);
    this.bMap.set('bMap', a);

    const ret: StaticArray<uint64, 3> = [
      this.gMap.get('gMap')[1],
      this.lMap.get(this.txn.sender, 'lMap')[1],
      this.bMap.get('bMap')[1],
    ];

    return ret;
  }
}

class ABITestUpdateStaticArrayInStorageMap extends Contract {
  gRef = new GlobalStateKey<StaticArray<uint64, 3>>({ key: 'gRef' });

  lRef = new LocalStateKey<StaticArray<uint64, 3>>({ key: 'lRef' });

  bRef = new BoxKey<StaticArray<uint64, 3>>({ key: 'bRef' });

  gMap = new GlobalStateMap<bytes, StaticArray<uint64, 3>>();

  lMap = new LocalStateMap<bytes, StaticArray<uint64, 3>>();

  bMap = new BoxMap<bytes, StaticArray<uint64, 3>>();

  @handle.optIn
  updateStaticArrayInStorageMap(): StaticArray<uint64, 3> {
    const a: StaticArray<uint64, 3> = [11, 22, 33];

    this.gMap.set('gMap', a);
    this.lMap.set(this.txn.sender, 'lMap', a);
    this.bMap.set('bMap', a);

    this.gMap.get('gMap')[1] = 1111;
    this.lMap.get(this.txn.sender, 'lMap')[1] = 2222;
    this.bMap.get('bMap')[1] = 3333;

    const ret: StaticArray<uint64, 3> = [
      this.gMap.get('gMap')[1],
      this.lMap.get(this.txn.sender, 'lMap')[1],
      this.bMap.get('bMap')[1],
    ];

    return ret;
  }
}

class ABITestNestedStaticArray extends Contract {
  nestedStaticArray(): uint64 {
    const a: StaticArray<StaticArray<uint64, 3>, 3> = [[11, 22, 33], [44, 55, 66], [77, 88, 99]];

    return a[1][1];
  }
}

class ABITestUpdateNestedStaticArrayElement extends Contract {
  updateNestedStaticArrayElement(): uint64 {
    const a: StaticArray<StaticArray<uint64, 3>, 3> = [[11, 22, 33], [44, 55, 66], [77, 88, 99]];

    a[1][1] = 555;

    return a[1][1];
  }
}

class ABITestUpdateNestedStaticArray extends Contract {
  updateNestedStaticArray(): uint64 {
    const a: StaticArray<StaticArray<uint64, 3>, 3> = [[11, 22, 33], [44, 55, 66], [77, 88, 99]];

    a[1] = [444, 555, 666];

    return a[1][1];
  }
}

class ABITestThreeDimensionalUint16Array extends Contract {
  threeDimensionalUint16Array(): uint<16> {
    const a: StaticArray<StaticArray<StaticArray<uint<16>, 2>, 2>, 2> = [
      [[11, 22], [33, 44]], [[55, 66], [77, 88]],
    ];

    a[1][1] = [777, 888];

    return a[1][1][1];
  }
}

class ABITestSimpleTuple extends Contract {
  simpleTuple(): uint<16> {
    const a: [uint64, uint<16>, uint64, uint<16>] = [11, 22, 33, 44];

    return a[3];
  }
}

class ABITestArrayInTuple extends Contract {
  arrayInTuple(): uint64 {
    const a: [uint64, uint<16>, StaticArray<uint64, 2>, uint<16>] = [
      11, 22, [33, 44], 55,
    ];

    return a[2][1];
  }
}

class ABITestTupleInArray extends Contract {
  tupleInArray(): uint<16> {
    const a: StaticArray<[uint64, uint<16>], 2> = [
      [11, 22], [33, 44],
    ];

    return a[1][1];
  }
}

class ABITestTupleInTuple extends Contract {
  tupleInTuple(): uint64 {
    const a: [uint<16>, uint<16>, [uint64, uint<16>], [uint<16>, uint64]] = [
      11, 22, [33, 44], [55, 66],
    ];

    return a[3][1];
  }
}

class ABITestShortTypeNotation extends Contract {
  shortTypeNotation(): uint<16> {
    const a: [StaticArray<uint<16>, 2>, StaticArray<uint64, 2>, StaticArray<uint<16>, 2>] = [
      [11, 22], [33, 44], [55, 66],
    ];

    return a[2][1];
  }
}

class ABITestDisgusting extends Contract {
  disgusting(): uint64 {
    const a: StaticArray<[
      StaticArray<uint<16>, 2>,
      uint64,
      [uint<16>, uint64],
      StaticArray< StaticArray<uint64, 2>, 2>
    ], 2> = [
      [[11, 22], 33, [44, 55], [[66, 77], [88, 99]]],
      [[111, 222], 333, [444, 555], [[666, 777], [888, 999]]],
    ];

    a[1][3][1] = [8888, 9999];
    return a[1][3][1][0]; // 8888
  }
}

class ABITestReturnTuple extends Contract {
  returnTuple(): [uint64, uint<16>, uint64] {
    const a: [uint64, uint<16>, uint64] = [11, 22, 33];
    return a;
  }
}

class ABITestTupleArg extends Contract {
  tupleArg(a: [uint64, uint<16>, uint64]): uint<16> {
    return a[1];
  }
}

class ABITestDynamicArray extends Contract {
  dynamicArray(): uint64 {
    const a: uint64[] = [11, 22, 33];

    return a[1];
  }
}

class ABITestReturnDynamicArray extends Contract {
  returnDynamicArray(): uint64[] {
    const a: uint64[] = [11, 22, 33];
    return a;
  }
}

class ABITestDynamicArrayArg extends Contract {
  dynamicArrayArg(a: uint64[]): uint64 {
    return a[1];
  }
}

class ABITestUpdateDynamicArrayElement extends Contract {
  updateDynamicArrayElement(): uint64 {
    const a: uint64[] = [11, 22, 33];

    a[1] = 222;

    return a[1];
  }
}

class ABITestDynamicTupleArray extends Contract {
  dynamicTupleArray(): uint64 {
    const a: [uint<16>, uint64][] = [[11, 22], [33, 44]];

    return a[1][1];
  }
}

class ABITestReturnTupleWithDyamicArray extends Contract {
  returnTupleWithDyamicArray(): [uint64, uint<16>, uint64[], uint<16>[]] {
    const a: [uint64, uint<16>, uint64[], uint<16>[]] = [1, 2, [3, 4], [5, 6]];

    return a;
  }
}

class ABITestReturnDynamicArrayFromTuple extends Contract {
  returnDynamicArrayFromTuple(): uint<8>[] {
    const a: [uint<8>, uint<16>, uint<8>[], uint<16>[], uint<8>[]] = [1, 2, [3, 4], [5, 6], [7, 8]];

    return a[4]; // [7, 8]
  }
}

class ABITestUpdateDynamicArrayInTuple extends Contract {
  updateDynamicArrayInTuple(): [uint<8>, uint<16>[], uint<8>[], uint<16>[], uint<8>[]] {
    const a: [uint<8>, uint<16>[], uint<8>[], uint<16>[], uint<8>[]] = [9, [8], [7], [6], [5]];

    a[0] = 99 as uint<8>;
    a[1] = [10, 11];
    a[2] = [12, 13];
    a[3] = [14, 15];
    a[4] = [16, 17];

    return a;
  }
}

class ABITestNonLiteralDynamicElementInTuple extends Contract {
  nonLiteralDynamicElementInTuple(): [uint<8>, uint<16>, uint<8>[], uint<16>[], uint<8>[]] {
    const e: uint<16>[] = [5, 6];
    const a: [uint<8>, uint<16>, uint<8>[], uint<16>[], uint<8>[]] = [1, 2, [3, 4], e, [7, 8]];

    return a;
  }
}

class ABITestArrayPush extends Contract {
  arrayPush(): uint<16>[] {
    const a: uint<16>[] = [1, 2];

    a.push(3 as uint<16>);

    return a;
  }
}

class ABITestArrayPop extends Contract {
  arrayPop(): uint<16>[] {
    const a: uint<16>[] = [1, 2, 3];

    a.pop()!;

    return a;
  }
}

class ABITestArrayPopValue extends Contract {
  arrayPopValue(): uint<16> {
    const a: uint<16>[] = [1, 2, 3];

    const v = a.pop()!;

    return v;
  }
}

class ABITestArraySplice extends Contract {
  arraySplice(): uint64[] {
    const a: uint64[] = [1, 2, 3];

    a.splice(1, 1);

    return a;
  }
}

class ABITestArraySpliceValue extends Contract {
  arraySpliceValue(): uint<16>[] {
    const a: uint<16>[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const i = 1;
    const l = 7;
    const v = a.splice(i, l);

    return v;
  }
}

class ABITestDynamicArrayElements extends Contract {
  dynamicArrayElements(): uint<16>[] {
    const a: uint<16>[] = [1, 2, 3];
    const newA: uint<16>[] = [a[0], a[1], a[2]];

    return newA;
  }
}

class ABITestSpliceLastElement extends Contract {
  spliceLastElement(): uint<16>[] {
    const a: uint<16>[] = [1, 2, 3];

    a.splice(2, 1);

    return a;
  }
}

class ABITestSpliceLastElementValue extends Contract {
  spliceLastElementValue(): uint<16>[] {
    const a: uint<16>[] = [1, 2, 3];

    const v = a.splice(2, 1);

    return v;
  }
}

class ABITestSpliceFirstElement extends Contract {
  spliceFirstElement(): uint<16>[] {
    const a: uint<16>[] = [1, 2, 3];

    a.splice(0, 1);

    return a;
  }
}

class ABITestSpliceFirstElementValue extends Contract {
  spliceFirstElementValue(): uint<16>[] {
    const a: uint<16>[] = [1, 2, 3];

    const v = a.splice(0, 1);

    return v;
  }
}

class ABITestStringReturn extends Contract {
  stringReturn(): string {
    return 'Hello World!';
  }
}

class ABITestStringArg extends Contract {
  stringArg(s: string): void {
    assert(s === 'Hello World!');
  }
}

class ABITestStringInTuple extends Contract {
  stringInTuple(): [uint<16>, uint<8>[], string, uint<8>[]] {
    const a: [uint<16>, uint<8>[], string, uint<8>[]] = [1, [2], 'Hello World!', [3]];

    return a;
  }
}

class ABITestAccesStringInTuple extends Contract {
  accesStringInTuple(): string {
    const a: [uint<16>, uint<8>[], string, uint<8>[]] = [1, [2], 'Hello World!', [3]];

    assert(a[2] === 'Hello World!');

    return a[2];
  }
}

class ABITestUpdateStringInTuple extends Contract {
  updateStringInTuple(): [uint<8>, uint<16>[], string, uint<16>[], uint<8>[]] {
    const a: [uint<8>, uint<16>[], string, uint<16>[], uint<8>[]] = [9, [8], 'Hi?', [6], [5]];

    a[0] = 99 as uint<8>;
    a[1] = [10, 11];
    a[2] = 'Hello World!';
    a[3] = [14, 15];
    a[4] = [16, 17];

    return a;
  }
}

class ABITestUpdateTupleWithOnlyDynamicTypes extends Contract {
  updateTupleWithOnlyDynamicTypes(): [uint<16>[], uint<16>[], uint<16>[]] {
    const a: [uint<16>[], uint<16>[], uint<16>[]] = [[1], [2], [3]];

    a[0] = [4, 5];
    a[1] = [6, 7];
    a[2] = [8, 9];

    return a;
  }
}

class ABITestShortenDynamicElementInTuple extends Contract {
  shortenDynamicElementInTuple(): [uint<16>[], uint<16>[], uint<16>[]] {
    const a: [uint<16>[], uint<16>[], uint<16>[]] = [[1, 2], [2, 3], [3, 4]];

    a[0] = [5];
    a[1] = [6];
    a[2] = [7];

    return a;
  }
}

class ABITestNamedTuple extends Contract {
  namedTuple(): string {
    const a: {
      foo: uint<16>,
      bar: string,
    } = {
      foo: 1,
      bar: 'Hello World!',
    };

    return a.bar;
  }
}

class ABITestUpdateNamedTuple extends Contract {
  updateNamedTuple(): string {
    const a: {
      foo: uint<16>,
      bar: string,
    } = {
      foo: 1,
      bar: 'Hi?',
    };

    a.bar = 'Hello World!';

    return a.bar;
  }
}

class ABITestCustomTypes extends Contract {
  customTypes(): string {
    const aa: CustomType = {
      foo: 1,
      bar: 'Hi?',
    };

    aa.bar = 'Hello World!';

    return aa.bar;
  }
}

class ABITestStaticStringArrayArg extends Contract {
  staticStringArrayArg(a: StaticArray<string, 3>): string {
    return a[1];
  }
}

class ABITestDynamicAccessOfDynamicElementInStaticArray extends Contract {
  dynamicAccessOfDynamicElementInStaticArray(a: StaticArray<string, 3>): string {
    const i = 1;
    return a[i];
  }
}

class ABITestDynamicArrayInMiddleOfTuple extends Contract {
  dynamicArrayInMiddleOfTuple(): [uint<16>, uint<8>[], uint<16>] {
    const a: [uint<16>, uint<8>[], uint<16>] = [1, [2], 3];

    return a;
  }
}

class ABITestAccessDynamicArrayInMiddleOfTuple extends Contract {
  accessDynamicArrayInMiddleOfTuple(): uint<8>[] {
    const a: [uint<16>, uint<8>[], uint<16>] = [1, [2], 3];

    return a[1];
  }
}

class ABITestAccessDynamicArrayElementInTuple extends Contract {
  accessDynamicArrayElementInTuple(): uint<8> {
    const a: [uint<16>, uint<8>[]] = [11, [22, 33, 44]];

    return a[1][1];
  }
}

class ABITestUpdateDynamicArrayInMiddleOfTuple extends Contract {
  updateDynamicArrayInMiddleOfTuple(): [uint<16>, uint<8>[], uint<16>] {
    const a: [uint<16>, uint<8>[], uint<16>] = [1, [2], 3];

    a[1] = [4, 5];

    return a;
  }
}

class ABITestNestedTuple extends Contract {
  nestedTuple(): [uint<16>, [uint<8>, string], [uint<16>, string]] {
    const a: [uint<16>, [uint<8>, string], [uint<16>, string]] = [11, [22, 'foo'], [33, 'bar']];

    return a;
  }
}

class ABITestUpdateDynamicElementInTupleWithSameLength extends Contract {
  updateDynamicElementInTupleWithSameLength(): [
    uint<16>,
    uint<8>[],
    uint<16>,
    uint<8>[],
    uint<16>
    ] {
    const a: [uint<16>, uint<8>[], uint<16>, uint<8>[], uint<16>] = [1, [2, 3, 4], 5, [6, 7, 8], 9];

    a[1] = [10, 11, 12];

    return a;
  }
}

class ABITestAccessDynamicStringArray extends Contract {
  accessDynamicStringArray(): string {
    const a: string[] = ['Hello', 'World', '!'];

    return a[1];
  }
}

class ABITestTxnTypes extends Contract {
  txnTypes(
    t: Txn,
    a: AppCallTxn,
    ac: AssetConfigTxn,
    af: AssetFreezeTxn,
    at: AssetTransferTxn,
    kr: KeyRegTxn,
    p: PayTxn,
  ): void {
    assert(t.sender === a.sender);
    assert(ac.sender === af.sender);
    assert(at.sender === kr.sender);
    assert(p.sender === t.sender);
  }
}

class ABITestUfixed extends Contract {
  ufixed(): ufixed<64, 2> {
    const a = 1.23 as ufixed<64, 2>;
    const b = 4.56 as ufixed<64, 2>;

    return a + b;
  }
}

class ABITestArrayLength extends Contract {
  arrayLength(): uint64 {
    const a: uint<8>[] = [11, 22, 33, 44, 55];

    return a.length;
  }
}

class ABITestStringLength extends Contract {
  stringLength(): uint64 {
    const s = 'foo bar';

    return s.length;
  }
}
class ABITestArrayRef extends Contract {
  arrayRef(): uint<8>[] {
    const a: uint<8>[] = [1, 2, 3];
    const b = a;

    b[1] = 4 as uint<8>;

    return a;
  }
}

class ABITestNestedArrayRef extends Contract {
  nestedArrayRef(): StaticArray<StaticArray<uint<8>, 2>, 2> {
    const a: StaticArray<StaticArray<uint<8>, 2>, 2> = [[1, 2], [3, 4]];
    const b = a[1];

    b[1] = 5 as uint<8>;

    return a;
  }
}

class ABITestNonLiteralNestedArrayRef extends Contract {
  nonLiteralNestedArrayRef(): StaticArray<StaticArray<uint<8>, 2>, 2> {
    const a: StaticArray<StaticArray<uint<8>, 2>, 2> = [[1, 2], [3, 4]];

    let i = 1;
    const b = a[i];

    i = 1337;

    b[1] = 5 as uint<8>;

    return a;
  }
}

class ABITestMultiNestedArrayRef extends Contract {
  multiNestedArrayRef(): StaticArray<StaticArray<StaticArray<uint<8>, 2>, 2>, 2> {
    const a:StaticArray<StaticArray<StaticArray<uint<8>, 2>, 2>, 2> = [
      [[1, 2], [3, 4]],
      [[5, 6], [7, 8]],
    ];

    const b = a[1];
    const c = b[1];

    c[1] = 9 as uint<8>;

    return a;
  }
}

type ObjectRefType = { foo : StaticArray<StaticArray<uint<8>, 2>, 2>} ;

class ABITestObjectArrayRef extends Contract {
  objectArrayRef(): ObjectRefType {
    const a: ObjectRefType = { foo: [[1, 2], [3, 4]] };
    const b = a.foo;
    const c = b[1];

    c[1] = 5 as uint<8>;

    return a;
  }
}

class ABITestStringAccessor extends Contract {
  stringAccessor(): string {
    const s = 'Hello World';

    return s[1];
  }
}

class ABITestEmptyStaticArray extends Contract {
  emptyStaticArray(): StaticArray<uint<16>, 3> {
    const a: StaticArray<uint<16>, 3> = [];

    return a;
  }
}

class ABITestPartialStaticArray extends Contract {
  partialStaticArray(): StaticArray<uint<16>, 3> {
    const a: StaticArray<uint<16>, 3> = [1];

    return a;
  }
}

class ABITestStorageTypeHint extends Contract {
  gKey = new GlobalStateKey<StaticArray<uint<16>, 3>>();

  partialStaticArray(): StaticArray<uint<16>, 3> {
    this.gKey.set([1, 2, 3]);

    return this.gKey.get();
  }
}

class ABITestEmptyDynamicArray extends Contract {
  emptyDynamicArray(): uint64[] {
    return [];
  }
}
