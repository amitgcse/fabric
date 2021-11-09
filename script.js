var canvas = new fabric.Canvas('canvas');

var pos = {x:0,y:0}

var box = new fabric.Rect({
    fill: '',
    stroke: 'gray',
    strokeWidth:1,
    height: 100,
    width: 100,
    top: -50,
    left: -50,
    originX: 'center',
    originY: 'center'
})

var arrowBottom = new fabric.Path('M 0 0 L -8 8 M 0 0 L 8 8 z', {
    left: -50,
    top: -50,
    stroke: 'red',
    strokeWidth: 3,
    fill: false,
    originX: 'center',
    originY: 'center'
});

var arrowTop = new fabric.Path('M 0 0 L -4 -4 M 0 0 L -4 4 z', {
    left: 0,
    top: -100,
    stroke: 'green',
    strokeWidth: 1,
    fill: false,
    originX: 'center',
    originY: 'center'
});



var shape = new fabric.Group([box, arrowTop, arrowBottom],{
    top: 200, left:200
})
canvas.add(shape);



// canvas.on('mouse:move', (event)=>{
//     xy = canvas.getPointer(event.e)
//     console.log(xy.x, xy.y)
// })

var moveHandler = function (evt) {
    var movingObject = evt.target;
    console.log('moved:',movingObject.get('left'), movingObject.get('top'));
};

var modifiedHandler = function (evt) {
    var modifiedObject = evt.target;
    console.log('modified: ', modifiedObject.get('left'), modifiedObject.get('top'));
};

canvas.on({
    'object:modified': modifiedHandler,
    'object:moving': moveHandler
})
