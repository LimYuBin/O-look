var color = document.querySelector("#color_select")
var style = document.querySelector('#style_select');
var brand = document.querySelector('#brand_search');
var price = document.querySelector('#pricepick');

console.log(color, style);

function toColor() {
    style.className = 'tab-pane fade'
    brand.className = 'tab-pane fade'
    price.className = 'tab-pane fade'

    color.className = 'tab-pane fade show active'
}

function toStyle() {
    color.className = 'tab-pane fade'
    brand.className = 'tab-pane fade'
    price.className = 'tab-pane fade'

    style.className = 'tab-pane fade show active'
}

function toBrand() {
    style.className = 'tab-pane fade'
    color.className = 'tab-pane fade'
    price.className = 'tab-pane fade'

    brand.className = 'tab-pane fade show active'
}

function toPrice() {
    style.className = 'tab-pane fade'
    color.className = 'tab-pane fade'
    brand.className = 'tab-pane fade'

    price.className = 'tab-pane fade show active'
}