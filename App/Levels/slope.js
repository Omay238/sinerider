const SLOPE = [{
  name: 'A Solid Slope',
  nick: 'SLOPE_POSITIVE',
  colors: Colors.biomes.alps,
  x: 10,
  y: 0,
  camera: {
    x: 0,
    y: 0,
    fov: 7,
  },
  requirements: ['HELLO_WORLD'],
  flashMathField: true,
  defaultExpression: '-x',
  hint: 'hint: x makes a slope',
  goals: [
    {
      type: 'path',
      expression: 'x',
      pathX: -4,
      x: -2,
      y: 0,
    },
  ],
  sledders: [{
    speech: [{
      speakerX: -0.4,
      content: 'Remember, follow the WHOLE path.',
      direction: 'up-up-left',
      distance: 1.5,
    },{
      speakerX: 0.3,
      content: 'I know how to do this, Ada!',
      direction: 'right-up',
      distance: 1,
    }]
  }],
  texts: [{
    x: -3,
    y: -2,
    size: 0.4,
    align: 'right',
    content: 'This is your objective →'
  },{
    x: -3.1,
    y: -6.8,
    size: 0.4,
    align: 'center',
    content: 'Edit this function to hit it!'
  }],
  slider: {expression:"nx", bounds:[-1,1,-1]},
  textBubbles: [{content:"Click here to edit your function", domSelector:"#expression-envelope", place:"top-right", destroyOnClick:true}, {content:"slide me up", domSelector:"#dotted-slider-box", place:"bottom-left",destroyOnClick:true}],
  sky: {
    asset:'images.western_slopes_background',
    margin: 1,
  },
  snow: {
    density: 0.4,
    maxHeight: 8,
    velocity: {
      x: 0.2,
      y: 0.4
    }
  },
  sprites: [
    {
      //tree 1
      asset: 'images.tree_1',
      flipX: '*',
      size: 5.4,
      x: 3,
      y: 0,
      offset: Vector2(0, 0.5),
      anchored: true
    },
    {
      asset: 'images.bush_1',
      flipX: '*',
      size: 1.7,
      x: 2.5,
      y: -1,
      offset: Vector2(0, 0.5),
      anchored: true
    },
    {
      asset: 'images.rock_3',
      flipX: '*',
      size: 0.9,
      x: 3.3,
      y: 0,
      offset: Vector2(0, 0.8),
      anchored: true
    },
    //
    {
      //tree 2
      asset: 'images.tree_2',
      flipX: '*',
      size: 5.4,
      x: -9.0,
      y: 0,
      offset: Vector2(0, 0.8),
      anchored: true
    },
    //
    {//tree 3
      asset: 'images.tree_3',
      flipX: '*',
      size: 5.4,
      x: -13,
      y: 0,
      offset: Vector2(0, 0.8),
      anchored: true
    },
    //
    //tree 4
    
    {
    asset: 'images.tree_2',
    flipX: '*',
    size: 5.4,
    x: -20,
    y: 0,
    offset: Vector2(0, 0.8),
    anchored: true
    },
      {
        asset: 'images.rock_3',
        flipX: '*',
        size: 0.9,
        x: -19.4,
        y: 0,
        offset: Vector2(0, 0.8),
        anchored: true
      },
      {
        asset: 'images.bush_1',
        flipX: '*',
        size: 1.5,
        x: -13.6,
        y: -3,
        offset: Vector2(0, 0.5),
        anchored: true
        },
      //
    {
      //tree 5
      asset: 'images.tree_1',
      flipX: '*',
      size: 5.4,
      x: -27,
      y: 0,
      offset: Vector2(0, 0.8),
      anchored: true
    },
    {
      asset: 'images.rock_3',
      flipX: '*',
      size: 1.5,
      x: -27.5,
      y: -0,
      offset: Vector2(0, 0.8),
      anchored: true
    },
    {
      asset: 'images.bush_1',
      flipX: '*',
      size: 1.5,
      x: -28,
      y: -0,
      offset: Vector2(0, 0.5),
      anchored: true
    },
    //
    //tree 6
    {
      asset: 'images.tree_1',
      flipX: '*',
      size: 5.4,
      x: -32,
      y: 0,
      offset: Vector2(0, 0.8),
      anchored: true
    },
    //
    //tree 7
    {
      asset: 'images.tree_2',
      flipX: '*',
      size: 5.4,
      x: -39,
      y: 0,
      offset: Vector2(0, 0.8),
      anchored: true
    },
    //
    //tree 8
    {
      asset: 'images.tree_2',
      flipX: '*',
      size: 5.4,
      x: -45,
      y: 0,
      offset: Vector2(0, 0.8),
      anchored: true
    },
    {
      asset: 'images.tree_3',
      flipX: '*',
      size: 5.4,
      x: -52,
      y: 0,
      offset: Vector2(0, 0.8),
      anchored: true
    },
  ]

},
{
  name: 'Try facing forwards?',
  nick: 'SLOPE_NEGATIVE',
  colors: Colors.biomes.alps,
  x: 10,
  y: 0,
  camera: {
    x: 2,
    y: -2,
    fov: 7,
  },
  requirements: null,
  defaultExpression: 'x',
  hint: 'hint: go negative',
  goals: [
    {
      type: 'path',
      expression: '-x',
      pathX: 6,
      x: 2,
      y: 0,
    },
  ],
  sledders: [{
    speech: [{
      speakerX: -0.4,
      content: '…forward this time? Please?',
      direction: 'up',
      distance: 1.5,
    },{
      speakerX: 0.3,
      content: 'Wuss.',
      direction: 'up-right',
      distance: 1,
    }]
  }],
  slider: {expression:"nx", bounds:[-1,1,1]},
  sky: {
    asset: 'images.western_slopes_background',
    margin: 1,
  },
  snow: {
    density: 0.4,
    maxHeight: 8,
    velocity: {
      x: 0.2,
      y: 0.4
    }
  },
  sprites: [
    {
      asset: 'images.tree_1',
      flipX: '*',
      size: 5.4,
      x: 3,
      y: 0,
      offset: Vector2(0, 0.7),
      anchored: true
    },
    {
      asset: 'images.rock_2',
      flipX: '*',
      size: 2.4,
      x: 3.7,
      y: -5,
      offset: Vector2(0, 0.5),
      anchored: true
    },
    {
      asset: 'images.crow',
      flipX: '*',
      size: 1.4,
      x: 3.8,
      y: 1,
      anchored: true
    },
    {
      asset: 'images.tree_2',
      flipX: '*',
      size: 6.5,
      x: 5.5,
      y: 0,
      offset: Vector2(0, 0.7),
      anchored: true
    },
    {
      asset: 'images.bush_1',
      flipX: '*',
      size: 4,
      x: 9.5,
      y: 0,
      offset: Vector2(0, 0.5),
      anchored: true
    },
    {
      asset: 'images.bush_2',
      flipX: '*',
      size: 4,
      x: 8.3,
      y: 0,
      offset: Vector2(0, 0.7),
      anchored: true
    },
    {
      asset: 'images.bush_2',
      flipX: '*',
      size: 4,
      x: -3,
      y: 0,
      offset: Vector2(0, 0.7),
      anchored: true
    },



  ]
},
{
  name: 'A real steep hill',
  nick: 'SLOPE_STEEPER',
  colors: Colors.biomes.alps,
  x: 5,
  y: -10,
  camera: {
    x: 2,
    y: -5.5,
    fov: 11,
  },
  requirements: ['SLOPE_NEGATIVE'],
  defaultExpression: '-x',
  hint: 'hint: try multiplying',
  goals: [
    {
      type: 'path',
      expression: '-x*2',
      pathX: 6,
      x: 2,
      y: 0,
    },
  ],
  sledders: [{
    speech: [{
      speakerX: -0.4,
      content: 'Wuss!',
      direction: 'up-up-left',
      distance: 1.3,
    },{
      speakerX: 0.3,
      content: '…shut up.',
      direction: 'up-right-right',
      distance: 1,
      speech: {
        content: 'This seems dangerous.',
        distance: 1,
      }
    }]
  }],
  slider: {
    expression: 'nx',
    bounds: [-1.5, -1, -1]
  },
  sky: {
    asset: 'images.western_slopes_background',
    margin: 1,
  },
  snow: {
    density: 0.4,
    maxHeight: 8,
    velocity: {
      x: 0.2,
      y: 0.4
    }
  },
  sprites: [
    {
    asset: 'images.rock_2',
      flipX: '*',
      size: 5.4,
      x: 3,
      y: 0,
      offset: Vector2(0, 0.5),
      anchored: true
    },
    {
      asset: 'images.bush_1',
      flipX: '*',
      size: 5.4,
      x: 7,
      y: 0,
      offset: Vector2(0, 0.7),
      anchored: true
    },
    {
      asset: 'images.tree_2',
      flipX: '*',
      size: 8.4,
      x: 10,
      y: 0,
      offset: Vector2(0, 0.7),
      anchored: true
    },
    {
      asset: 'images.tree_1',
      flipX: '*',
      size: 7.4,
      x: 5,
      y: 0,
      offset: Vector2(0, 0.7),
      anchored: true
    },
    {
      asset: 'images.tree_3',
      flipX: '*',
      size: 4,
      x: -2,
      y: 0,
      offset: Vector2(0, 0.7),
      anchored: true
    },
  ]
},
{
  name: 'The bunny slope',
  nick: 'SLOPE_SHALLOWER',
  colors: Colors.biomes.alps,
  x: 10,
  y: 0,
  camera: {
    x: 2,
    y: 0,
    fov: 7,
  },
  requirements: null,
  hint: 'hint: what’s the opposite of multiplying?',
  defaultExpression: '-x',
  goals: [
    {
      type: 'path',
      expression: '-x/2',
      pathX: 6,
      x: 2,
      y: 0,
    },
  ],
  sledders: [{
    speech: [{
      speakerX: -0.4,
      speakerY: 0.7,
      content: '…yes.',
      direction: 'up-up-left',
      distance: 1.4,
      speech: {
        content: 'No.',
        direction: 'up',
        distance: 0.8,
      }
    },{
      speakerX: 0.7,
      speakerY: 0.7,
      content: 'Do you want my scarf?',
      direction: 'right-up-up',
      distance: 2.2,
      speech: {
        content: 'Are you cold?',
        direction: 'up-up-left',
        distance: 1.2,
      }
    }]
  }],
  slider: {expression:"\\frac{-x}{n}", bounds:[1,1.5,1]},
  sky: {
    asset: 'images.western_slopes_background',
    margin: 1,
  },
  snow: {
    density: 0.4,
    maxHeight: 8,
    velocity: {
      x: 0.2,
      y: 0.4
    }
  },
  sprites: [
    {
      asset: 'images.tree_2',
      flipX: '*',
      size: 1.4,
      x: -2,
      y: 0,
      offset: Vector2(0, 0.8),
      anchored: true
    },
    {
      asset: 'images.tree_2',
      flipX: '*',
      size: 3.4,
      x: -5,
      y: 0,
      offset: Vector2(0, 0.8),
      anchored: true
    },
    {
      asset: 'images.bush_2',
      flipX: '*',
      size: 2.4,
      x: -3,
      y: 0,
      offset: Vector2(0, 0.8),
      anchored: true
    },
    {
      asset: 'images.tree_2',
      flipX: '*',
      size: 7.4,
      x: -7,
      y: 0,
      offset: Vector2(0, 0.8),
      anchored: true
    },
    {
      asset: 'images.cloud_1',
      flipX: '*',
      size: 5.4,
      x: 7,
      y: 7,
      offset: Vector2(0, 0.8),
      anchored: true
    },
    {
      asset: 'images.rock_3',
      flipX: '*',
      size: 1.5,
      x: -2.5,
      y: -1.5,
      offset: Vector2(0, 0.5),
      anchored: true
    },
    {
      asset: 'images.rock_3',
      flipX: '*',
      size: 1.5,
      x: -5.5,
      y: -1.5,
      offset: Vector2(0, 0.5),
      anchored: true
    },
    {
      asset: 'images.rock_3',
      flipX: '*',
      size: 1.5,
      x: -4.5,
      y: -1.5,
      offset: Vector2(0, 0.5),
      anchored: true
    },
    {
      asset: 'images.rock_3',
      flipX: '*',
      size: 1.5,
      x: -2.5,
      y: -1.5,
      offset: Vector2(0, 0.5),
      anchored: true
    },
    {
      asset: 'images.rock_1',
      flipX: '*',
      size: 2.5,
      x: -4,
      y: -1.5,
      offset: Vector2(0, 0.3),
      anchored: true
    },
    {
      asset: 'images.cloud_1',
      flipX: '*',
      size: 2.5,
      x: 3,
      y: 5,
      offset: Vector2(5, 0),
      anchored: true
    },
    {
      asset: 'images.cloud_2',
      flipX: '*',
      size: 2.5,
      x: 5,
      y: 5,
      offset: Vector2(5, 0),
      anchored: true
    },
    {
      asset: 'images.cloud_2',
      flipX: '*',
      size: 2.5,
      x: 5,
      y: 5,
      offset: Vector2(5, 0),
      anchored: true
    },
    {
      asset: 'images.cloud_1',
      flipX: '*',
      size: 5.5,
      x: 3,
      y: 8,
      offset: Vector2(6, 0),
      anchored: true
    },
    {
      asset: 'images.cloud_2',
      flipX: '*',
      size: 3.5,
      x: 10,
      y: 9,
      offset: Vector2(8, 0),
      anchored: true
    },
    {
      asset: 'images.cloud_2',
      flipX: '*',
      size: 2.5,
      x: 7,
      y: 9,
      offset: Vector2(7, 0),
      anchored: true
    },
    {
      asset: 'images.tree_3',
      flipX: '*',
      size: 5.5,
      x: 10,
      y: 0,
      offset: Vector2(0, 0.8),
      anchored: true
    },
    {
      asset: 'images.tree_2',
      flipX: '*',
      size: 2.5,
      x: 12,
      y: 0,
      offset: Vector2(0, 0.8),
      anchored: true
    },
    {
      asset: 'images.tree_1',
      flipX: '*',
      size: 1.5,
      x: 1,
      y: 0,
      offset: Vector2(0, 0.8),
      anchored: true
    },
]
},
{
  name: 'Moving up in the world',
  nick: 'SLOPE_HIGHER',
  colors: Colors.biomes.alps,
  x: 5,
  y: 10,
  camera: {
    x: 5,
    y: 2,
    fov: 9,
  },
  requirements: ['SLOPE_NEGATIVE'],
  defaultExpression: '-x-3',
  hint: 'hint: add a constant',
  goals: [
    {
      type: 'path',
      expression: '-x+7',
      pathX: 6,
      x: 2,
      y: 0,
    },
  ],
  sledders: [{
    speech: [{
      speakerX: -0.4,
      content: '…sorry.',
      direction: 'up-left',
      distance: 1,
      speech: {
        content: 'Things seem better today!',
        distance: 1,
      }
    },{
      speakerX: 0.3,
      content: 'Yeah. Can we not talk about it?',
      direction: 'right-up-up',
      distance: 1.3,
    }]
  }],
  slider: {expression:"-x + n", bounds:[-3,1,-3]},
  sky: {
    asset: 'images.western_slopes_background',
    margin: 1,
  },
  snow: {
    density: 0.4,
    maxHeight: 8,
    velocity: {
      x: 0.2,
      y: 0.4
    }
  },

  sprites: [
    {
      asset: 'images.tree_2',
      flipX: '*',
      size: 6,
      x: -4,
      offset: [0, 0.9],
      anchored: true

    },
    {
      asset: 'images.fox',
      flipX: '*',
      size: 1.5,
      x: -4,
      y:1,
      offset: [0, 0.7],
      anchored: true

    },
    {
    asset: 'images.bush_1',
    flipX: '*',
    size: 3.5,
    x: -2.5,
    y:-2.8,
    offset: [0, 0.5],
    anchored: true
    },
    {
      asset: 'images.rock_3',
      flipX: '*',
      size: 2,
      x: -3.2,
      y: -2,
      offset: [0, 0.7],
      anchored: true

    },
    {
    asset: 'images.cloud_1',
    flipX: '*',
    size: 3.7,
    x: 4,
    y:5,
    offset: [0, 3],
    anchored: true
  },
  {
    asset: 'images.cloud_2',
    flipX: '*',
    size: 3.7,
    x: 7,
    y:15,
    offset: [0, 2],
    anchored: true
  },
  {
    asset: 'images.cloud_3',
    flipX: '*',
    size: 3.7,
    x: 14,
    y:20,
    offset: [0, 4],
    anchored: true
  },
  {
    asset: 'images.cloud_1',
    flipX: '*',
    size: 3.7,
    x: 4,
    y:5,
    offset: [0, 3],
    anchored: true
  },
  {
    asset: 'images.cloud_2',
    flipX: '*',
    size: 3.7,
    x: 7,
    y:15,
    offset: [0, 2],
    anchored: true
  },
  {
    asset: 'images.cloud_3',
    flipX: '*',
    size: 3.7,
    x: 14,
    y:20,
    offset: [0, 4],
    anchored: true
  },
  ],
},
{
  name: 'About halfway down',
  nick: 'SLOPE_LOWER',
  colors: Colors.biomes.alps,
  x: 10,
  y: 0,
  camera: {
    x: 2,
    y: -4,
    fov: 11,
  },
  requirements: null,
  defaultExpression: '-x',
  hint: 'hint: if adding makes it go up…',
  goals: [
    {
      type: 'path',
      expression: '-x-3',
      pathX: 4,
      x: 3,
      y: 0,
    },
  ],
  sledders: [{
    speech: [{
      speakerX: -0.4,
      content: 'I love you.',
      direction: 'up',
      distance: 1.5,
    },{
      speakerX: 0.4,
      content: 'I love you too, Sam.',
      direction: 'right-up',
      distance: 0.75,
    }]
  }],
  slider: {expression:"-x + n", bounds:[-2,0,0]},
  sky: {
    asset: 'images.western_slopes_background',
    margin: 1,
  },
  snow: {
    density: 0.4,
    maxHeight: 8,
    velocity: {
      x: 0.2,
      y: 0.4
    }
  },
  sprites: [
  {
    asset: 'images.cloud_1',
    flipX: '*',
    size: 3.7,
    x: 4,
    y:5,
    offset: [5, 0],
    anchored: true
  },
  {
    asset: 'images.cloud_2',
    flipX: '*',
    size: 3.7,
    x: 7,
    y:15,
    offset: [3, 2],
    anchored: true
  },
  {
    asset: 'images.cloud_3',
    flipX: '*',
    size: 3.7,
    x: 14,
    y:20,
    offset: [1, 4],
    anchored: true
  },
  {
    asset: 'images.cloud_1',
    flipX: '*',
    size: 3.7,
    x: 4,
    y:5,
    offset: [2, 3],
    anchored: true
  },
  {
    asset: 'images.cloud_2',
    flipX: '*',
    size: 5.7,
    x: 20,
    y:15,
    offset: [5, 0],
    anchored: true
  },
  {
    asset: 'images.cloud_3',
    flipX: '*',
    size: 3.7,
    x: 14,
    y:20,
    offset: [3, 2],
    anchored: true
  },
  {
    asset: 'images.cloud_2',
    flipX: '*',
    size: 3.7,
    x: 7,
    y:15,
    offset: [16, 2],
    anchored: true
  },
  {
    asset: 'images.cloud_3',
    flipX: '*',
    size: 3.7,
    x: 14,
    y:20,
    offset: [15, 4],
    anchored: true
  },
  {
    asset: 'images.cloud_1',
    flipX: '*',
    size: 3.7,
    x: 4,
    y:5,
    offset: [14, 3],
    anchored: true
  },
  {
    asset: 'images.cloud_2',
    flipX: '*',
    size: 5.7,
    x: 20,
    y:15,
    offset: [10, 0],
    anchored: true
  },
  {
    asset: 'images.cloud_3',
    flipX: '*',
    size: 3.7,
    x: 18,
    y:20,
    offset: [9, 2],
    anchored: true
  },
  {
    asset: 'images.cloud_2',
    flipX: '*',
    size: 3.7,
    x: 7,
    y:15,
    offset: [0, 2],
    anchored: true
  },
  {
    asset: 'images.cloud_3',
    flipX: '*',
    size: 3.7,
    x: 14,
    y:20,
    offset: [0, 4],
    anchored: true
  },
  {
    asset: 'images.cloud_1',
    flipX: '*',
    size: 3.7,
    x: 4,
    y:5,
    offset: [0, 3],
    anchored: true
  },
  {
    asset: 'images.cloud_2',
    flipX: '*',
    size: 5.7,
    x: 20,
    y:15,
    offset: [5, 0],
    anchored: true
  },
  {
    asset: 'images.cloud_3',
    flipX: '*',
    size: 3.7,
    x: 1,
    y:20,
    offset: [3, 2],
    anchored: true
  },
  {
    asset: 'images.cabin_2',
    size: 6,
    x: -4,
    offset: [0, 0.7],
    anchored: true,
  },
  {
    asset: 'images.tree_2',
    size: 5,
    x: -2,
    offset: [0, 0.7],
    anchored: true,
  },
  {
    asset: 'images.tree_3',
    size: 5,
    x: -6,
    offset: [0, 0.7],
    anchored: true,
  },
]
},
CONSTANT_LAKE,
{
  name: 'We\'re at the bottom',
  nick: 'SLOPE_SCALE_TRANSLATE',
  colors: Colors.biomes.alps,
  x: 10,
  y: 0,
  camera: {
    x: 10,
    y: -5,
    fov: 12,
  },
  requirements: [
    'CONSTANT_LAKE',
  ],
  defaultExpression: '-\\frac{x}{2}',
  hint: 'put it all together!',
  goals: [
    {
      type: 'path',
      expression: '-x/3-5',
      pathX: 14,
      x: 3,
      y: 0,
    },
  ],
  sprites: [{
    x: 2,
    size: 2,
    asset: 'images.sam_float',
    speech: [{
      speakerX: 0.3,
      speakerY: -0.4,
      content: 'I’m gonna split off and check out the valley.',
      direction: 'up-up-right',
      distance: 2.5,
    }]
  },
],
  sledders: [{
    asset: 'images.benny_sled',
    speech: [{
      speakerX: 0,
      y: 0.6,
      content: 'catch up with you later!',
      direction: 'up-up-left',
      distance: 1,
    }]
  }],
  sky: {
    asset: 'images.western_slopes_background',
    margin: 1,
  },
  snow: {
    density: 0.4,
    maxHeight: 8,
    velocity: {
      x: 0.2,
      y: 0.4
    }
  },
}]