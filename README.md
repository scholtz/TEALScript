# TEALScript

TEALScript is a TypeScript compiler for generating TEAL. The goal is to enable developers to write Algorand Smart Contracts using native TypeScript syntax. Since TEALScript uses native TypeScript syntax, IDE support works out of the box for any IDE that supports TypeScript.

## Documentation

The documentation for the latest release can be viewed at [tealscript.netlify.app](https://tealscript.netlify.app/pages/getting_started.html) and can be generated locally with `yarn docs`

## Status

TEALScript is still very much a work in progress. The current version is `0.x.x`. This means there will be frequent changes being made, including breaking changes, without incrementing the MAJOR version number. As such, it is currently not recommended to use TEALScript in production.

### Missing Features

* ABI boolean encoding/decoding
* ABI ufixed encoding/decoding
* More testing
* More documentation

## Example Contract

The artifacts for this contract can be seen in [examples/calculator/artifacts](./examples/calculator/artifacts)

```ts
import { Contract } from '../../src/lib/index';

class Calculator extends Contract {
  private getSum(a: number, b: number): number {
    return a + b;
  }

  private getDifference(a: number, b: number): number {
    return a >= b ? a - b : b - a;
  }

  doMath(a: number, b: number, operation: string): number {
    if (operation === 'sum') {
      return this.getSum(a, b);
    } if (operation === 'difference') {
      return this.getDifference(a, b);
    } throw Error('Invalid operation');
  }
}
```
