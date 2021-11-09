var canvas = new fabric.Canvas('canvas');
var path = new fabric.Path('M 0 0 L 40 -40 M 0 0 L 40 40 z', {
    left: 100,
    top: 100,
    stroke: 'red',
    strokeWidth: 1,
    fill: false
});

var box = new fabric.Rect({
    height:40,
    width:40,
    top:100,
    left:100
})

canvas.add(path, box);

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

a = {"e":{"isTrusted":true},"target":{"type":"circle","version":"4.6.0","originX":"left","originY":"top","left":140,"top":160,"width":40,"height":40,"fill":"blue","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeDashOffset":0,"strokeLineJoin":"miter","strokeUniform":false,"strokeMiterLimit":4,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"backgroundColor":"","fillRule":"nonzero","paintFirst":"fill","globalCompositeOperation":"source-over","skewX":0,"skewY":0,"radius":20,"startAngle":0,"endAngle":6.283185307179586},"subTargets":[],"button":1,"isClick":false,"pointer":{"x":141,"y":160.15625},"absolutePointer":{"x":141,"y":160.15625},"transform":null}