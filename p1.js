var cars = 'item1,item2,item3,item4,item5'.split(',');
for (var c in cars) {
    var newElement = document.createElement('div');
    newElement.id = cars[c]; newElement.className = "car";
    newElement.innerHTML = cars[c];
    document.body.appendChild(newElement);
}
