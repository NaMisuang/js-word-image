# js-word-image V1.2.0

Support the front-end export of word documents to local, support the customization of word content, and support pictures (URL format)

## Installation

npm  -i  --save sw-exportword

## In JavaScript

#### Support word

``` JavaScript

import { ExportWord } from 'sw-exportword';

const htmlStr = `<div>
                    <span>Hello Word</span>
                    <img width=400 height=300 src='httpurl'  alt='Loading failed'>
                </div>`;
// 导出 支持传入String类型
ExportWord(htmlStr, 'wordname.doc');

```


#### Supports custom styles for word text

``` JavaScript

import { ExportWord } from 'sw-exportword';

const htmlStr = `<div>
                    <span class='title-span'>Hello Word</span>
                </div>`;
const htmlStyle = ".title-span{ font-size:16px; color:red }";

// Export Supports incoming Object types containing custom styles
ExportWord({htmlStr, htmlStyle}, 'wordname.doc');

```

#### Supports exporting images to word documents (only URL format is supported temporarily)

``` JavaScript

import { ExportWord } from 'sw-exportword';

const htmlStr = `<img width="300" height="300" src="httpurl" alt="Loading failed" />`;

// Export Support for pictures (URL format)
ExportWord(htmlStr, 'wordname.doc');

```
