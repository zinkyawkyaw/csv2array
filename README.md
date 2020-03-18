### CSV to ARRRAY
- only support CSV file;
- the first row will be keyword name in the array.

- if string was 'number;first;last;handle\n1;Mark;Otto;@mdo\n2;Jacob;Thornton;@fat\n3;Larry;the Bird;@twitter\n';
- result will be [{number: 1, first : Mark , last : Otto, handle : @mdo}, ... ]

`npm install @necessarylion/csv2array --save`

### Usage 

```
import csv2array from '@necessarylion/csv2array'

let file = document.getElementById("your-input-field-id")
csv2array.file ({file : file , seperator: ','}, res => {
    console.log(res);
})

let string = 'number;first;last;handle\n1;Mark;Otto;@mdo\n2;Jacob;Thornton;@fat\n3;Larry;the Bird;@twitter\n';
csv2array.string ({string : string , seperator: ','}, res => {
    console.log(res);
})

url  = 'path/to/file.csv';
csv2array.url({url : url , seperator: ','}, res => {
    console.log(res);
});

```