<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# incrmmeanstdev

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute a moving [arithmetic mean][arithmetic-mean] and [corrected sample standard deviation][standard-deviation] incrementally.

<section class="intro">

For a window of size `W`, the [arithmetic mean][arithmetic-mean] is defined as

<!-- <equation class="equation" label="eq:arithmetic_mean" align="center" raw="\bar{x} = \frac{1}{W} \sum_{i=0}^{W-1} x_i" alt="Equation for the arithmetic mean."> -->

```math
\bar{x} = \frac{1}{W} \sum_{i=0}^{W-1} x_i
```

<!-- <div class="equation" align="center" data-raw-text="\bar{x} = \frac{1}{W} \sum_{i=0}^{W-1} x_i" data-equation="eq:arithmetic_mean">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@10877053965ff3d0149611583ee50714bb64a8ea/lib/node_modules/@stdlib/stats/incr/mmeanstdev/docs/img/equation_arithmetic_mean.svg" alt="Equation for the arithmetic mean.">
    <br>
</div> -->

<!-- </equation> -->

and the [corrected sample standard deviation][standard-deviation] is defined as

<!-- <equation class="equation" label="eq:corrected_sample_standard_deviation" align="center" raw="s = \sqrt{\frac{1}{W-1} \sum_{i=0}^{W-1} ( x_i - \bar{x} )^2}" alt="Equation for the corrected sample standard deviation."> -->

```math
s = \sqrt{\frac{1}{W-1} \sum_{i=0}^{W-1} ( x_i - \bar{x} )^2}
```

<!-- <div class="equation" align="center" data-raw-text="s = \sqrt{\frac{1}{W-1} \sum_{i=0}^{W-1} ( x_i - \bar{x} )^2}" data-equation="eq:corrected_sample_standard_deviation">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@8284daf692badf90996becd5080db0dabf438411/lib/node_modules/@stdlib/stats/incr/mmeanstdev/docs/img/equation_corrected_sample_standard_deviation.svg" alt="Equation for the corrected sample standard deviation.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import incrmmeanstdev from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-incr-mmeanstdev@esm/index.mjs';
```
The previous example will load the latest bundled code from the esm branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/stats-incr-mmeanstdev/tags). For example,

```javascript
import incrmmeanstdev from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-incr-mmeanstdev@v0.2.0-esm/index.mjs';
```

#### incrmmeanstdev( \[out,] window )

Returns an accumulator `function` which incrementally computes a moving [arithmetic mean][arithmetic-mean] and [corrected sample standard deviation][standard-deviation]. The `window` parameter defines the number of values over which to compute the moving [arithmetic mean][arithmetic-mean] and [corrected sample standard deviation][standard-deviation].

```javascript
var accumulator = incrmmeanstdev( 3 );
```

By default, the returned accumulator `function` returns the accumulated values as a two-element `array`. To avoid unnecessary memory allocation, the function supports providing an output (destination) object.

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs';

var accumulator = incrmmeanstdev( new Float64Array( 2 ), 3 );
```

#### accumulator( \[x] )

If provided an input value `x`, the accumulator function returns updated accumulated values. If not provided an input value `x`, the accumulator function returns the current accumulated values.

```javascript
var accumulator = incrmmeanstdev( 3 );

var out = accumulator();
// returns null

// Fill the window...
out = accumulator( 2.0 ); // [2.0]
// returns [ 2.0, 0.0 ]

out = accumulator( 1.0 ); // [2.0, 1.0]
// returns [ 1.5, ~0.71 ]

out = accumulator( 3.0 ); // [2.0, 1.0, 3.0]
// returns [ 2.0, 1.0 ]

// Window begins sliding...
out = accumulator( -7.0 ); // [1.0, 3.0, -7.0]
// returns [ -1.0, ~5.29 ]

out = accumulator( -5.0 ); // [3.0, -7.0, -5.0]
// returns [ -3.0, ~5.29 ]

out = accumulator();
// returns [ -3.0, ~5.29 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Input values are **not** type checked. If provided `NaN`, the accumulated values are `NaN` for **at least** `W-1` future invocations. If non-numeric inputs are possible, you are advised to type check and handle accordingly **before** passing the value to the accumulator function.
-   As `W` values are needed to fill the window buffer, the first `W-1` returned values are calculated from smaller sample sizes. Until the window is full, each returned value is calculated from all provided values.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@esm/index.mjs';
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs';
import ArrayBuffer from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-buffer@esm/index.mjs';
import incrmmeanstdev from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-incr-mmeanstdev@esm/index.mjs';

var offset;
var acc;
var buf;
var out;
var ms;
var N;
var v;
var i;
var j;

// Define the number of accumulators:
N = 5;

// Create an array buffer for storing accumulator output:
buf = new ArrayBuffer( N*2*8 ); // 8 bytes per element

// Initialize accumulators:
acc = [];
for ( i = 0; i < N; i++ ) {
    // Compute the byte offset:
    offset = i * 2 * 8; // stride=2, bytes_per_element=8

    // Create a new view for storing accumulated values:
    out = new Float64Array( buf, offset, 2 );

    // Initialize an accumulator which will write results to the view:
    acc.push( incrmmeanstdev( out, 5 ) );
}

// Simulate data and update the moving sample means and standard deviations...
for ( i = 0; i < 100; i++ ) {
    for ( j = 0; j < N; j++ ) {
        v = randu() * 100.0 * (j+1);
        acc[ j ]( v );
    }
}

// Print the final results:
console.log( 'Mean\tStDev' );
for ( i = 0; i < N; i++ ) {
    ms = acc[ i ]();
    console.log( '%d\t%d', ms[ 0 ].toFixed( 3 ), ms[ 1 ].toFixed( 3 ) );
}

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/stats-incr/meanstdev`][@stdlib/stats/incr/meanstdev]</span><span class="delimiter">: </span><span class="description">compute an arithmetic mean and corrected sample standard deviation incrementally.</span>
-   <span class="package-name">[`@stdlib/stats-incr/mmean`][@stdlib/stats/incr/mmean]</span><span class="delimiter">: </span><span class="description">compute a moving arithmetic mean incrementally.</span>
-   <span class="package-name">[`@stdlib/stats-incr/mmeanvar`][@stdlib/stats/incr/mmeanvar]</span><span class="delimiter">: </span><span class="description">compute a moving arithmetic mean and unbiased sample variance incrementally.</span>
-   <span class="package-name">[`@stdlib/stats-incr/mstdev`][@stdlib/stats/incr/mstdev]</span><span class="delimiter">: </span><span class="description">compute a moving corrected sample standard deviation incrementally.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-incr-mmeanstdev.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-incr-mmeanstdev

[test-image]: https://github.com/stdlib-js/stats-incr-mmeanstdev/actions/workflows/test.yml/badge.svg?branch=v0.2.0
[test-url]: https://github.com/stdlib-js/stats-incr-mmeanstdev/actions/workflows/test.yml?query=branch:v0.2.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-incr-mmeanstdev/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-incr-mmeanstdev?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-incr-mmeanstdev.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-incr-mmeanstdev/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-incr-mmeanstdev/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-incr-mmeanstdev/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-incr-mmeanstdev/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-incr-mmeanstdev/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-incr-mmeanstdev/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-incr-mmeanstdev/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-incr-mmeanstdev/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-incr-mmeanstdev/main/LICENSE

[arithmetic-mean]: https://en.wikipedia.org/wiki/Arithmetic_mean

[standard-deviation]: https://en.wikipedia.org/wiki/Standard_deviation

<!-- <related-links> -->

[@stdlib/stats/incr/meanstdev]: https://github.com/stdlib-js/stats-incr-meanstdev/tree/esm

[@stdlib/stats/incr/mmean]: https://github.com/stdlib-js/stats-incr-mmean/tree/esm

[@stdlib/stats/incr/mmeanvar]: https://github.com/stdlib-js/stats-incr-mmeanvar/tree/esm

[@stdlib/stats/incr/mstdev]: https://github.com/stdlib-js/stats-incr-mstdev/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
