worldData = []

worldData.push({
  version: '0.0.0',
  name: 'Eden',
  assets: {
    images: {
      initial_bg: 'initial-bg.webp',
      western_slopes_background: '.webp',
      western_slopes_background_no_sky: '.webp',
      valley_parabola_background: '.webp',
      eternal_canyon_background: '.webp',
      sinusoidal_desert_background: '.webp',
      logistic_dunes_background: '.webp',
      hilbert_delta_background: '.webp',
      volcano_background_tall: '.webp',

      volcano_rock_1: '.webp',
      volcano_tree_1: '.webp',
      volcano_tree_2: '.webp',
      
      ada_sled: '.webp',
      jack_sled: '.webp',
      ada_jack_sled: '.webp',
      lunchbox_sam_sled: 'ada_jack_sled.webp',
      lunchbox_sled: 'jack_sled.webp',
      benny_sled: 'jack_sled.webp',
      jack_float: 'jack_float_right.webp',
      benny_float: 'benny_float.webp',
      sam_sled: 'ada_sled.webp',
      ada_float: 'ada_float_right.webp',
      sam_float: 'ada_float_right.webp',
      sam_stand_snowball: 'sam_float_left.svg',
      cabin_1: '.webp',
      world_map: '.svg',
      goalpost_left: '.webp',
      goalpost_right: '.webp',
      cloud_1: '.webp',
      cloud_2: '.webp',
      cloud_3: '.webp',
      cloud_4: '.webp',
      cloud_5: '.webp',
      cloud_6: '.webp',
      cloud_7: '.webp',
      cloud_8: '.webp',
      cloud_9: '.webp',
      cloud_10: '.webp',
      tree_1: '.webp',
      tree_2: '.webp',
      tree_3: '.webp',
      fox: '.webp',
      slime: '.webp',
      crow: '.webp',
      tree_home_1: '.webp',
      tree_home_2: '.webp',
      tree_home_3: '.webp',
      logo_text: '.webp',
      rock_1: '.webp',
      rock_2: '.webp',
      rock_3: '.webp',
      big_rock: '.webp',
      bush_1: '.webp',
      bush_2: '.webp',
      grass_1: '.webp',
      plant_1: '.webp',
      plant_2: '.webp',
      plant_3: '.webp',
      plant_4: '.webp',
      plant_5: '.webp',
      plant_clump_1: '.webp',
      plant_clump_2: '.webp',
      plant_clump_3: '.webp',
      plant_clump_4: '.webp',
      plant_clump_5: '.webp',
      grass_2: '.webp',
      tumbleweed: '.webp',
      cactus: '.webp',
      blooming_joshua_tree: '.webp',
      desert_tree: '.webp',
      dante: '.webp',
      windmill: '.png',
      lsys_red_joshua_tree: '.webp',
      nicky_sledders: '.webp',
      pi_dance_kick: '.webp',
      pi_confused: '.webp',
      xkcd_sledders: '.webp',
      benny_sam_sled: '.svg',
      credits: '.webp',
    },
    sounds: {
      // sounds.music loaded in levels
      music: {
        birds: '.mp3',
      },
      map_button: 'map_button_compressed.mp3',
      next_button: 'next_button_compressed.mp3',
      enter_level: 'enter_level_compressed.mp3',
      goal_fail: {
        src: 'goal_fail_compressed.mp3',
        volume: 0.1,
      },
      goal_success: 'goal_success_compressed.mp3',
      level_success: 'level_success_compressed.mp3',
      restart_button: 'restart_button_compressed.mp3',
      start_running: 'start_running_compressed.mp3',
      stop_running: 'stop_running_compressed.mp3',
      map_zoom_in: {
        src: 'woosh_out.mp3',
        rate: 1.2,
      },
      map_zoom_out: {
        src: 'woosh_out.mp3',
        rate: 0.8,
      },
      map_zoom_highlighted: {
        src: 'woosh_out.mp3',
        rate: 0.6,
      },
      map_zoom_show_all: {
        src: 'woosh_out.mp3',
        rate: 0.4,
      },
      path_goal_start: 'path_goal_start_compressed.mp3',
      path_goal_continue: 'path_goal_continue_compressed.mp3',
    },
    shaders: {
      blend_frag: 'blend.frag',
      points_frag: 'points.frag',
      points_vert: 'points.vert',
      lake_frag: 'lake.frag',
      quad_frag: 'quad.frag',
      quad_vert: 'quad.vert',
      sunset_frag: 'sunset.frag',
      sunset_vert: 'sunset.vert',
      volcano: {
        gaussian_x: '.frag',
        gaussian_y: '.frag',
        output: '.frag',
        source: '.frag',
        lava: '.frag',
        volcano_blend: '.frag',
        volcano_stars_frag: 'volcano_stars.frag',
        volcano_stars_vert: 'volcano_stars.vert',
        volcano_sunset: '.frag',
      },
    },
  },
  levelData: [
    {
      name: 'Welcome',
      nick: 'HELLO_WORLD',
      biome: 'home',
      x: 0,
      y: 0,
      requirements: [],
      runMusic: 'sounds.music.intro',
      flashRunButton: true,
      defaultExpression:
        '\\frac{-2}{1+e^{-x+5}}+\\frac{-2}{1+\\left(x-30\\right)^2}',
      goals: [
        {
          type: 'dynamic',
          x: 6.7,
          y: 0,
        },
      ],
      sledders: [
        {
          x: 0,
          asset: 'images.benny_sled',
          speech: {
            x: 0.4,
            y: 0.6,
            content: 'snow!!',
            direction: Vector2(0.5, 1),
            distance: 1,
            color: '#fff',
          },
        },
      ],
      walkers: [
        {
          x: 7.6,
          victoryX: 10,
          followFlip: false,
          asset: 'images.sam_float',
          range: [7.6, 7.6],
          size: 2,
          flipX: true,
          sloped: true,
          speech: [
            {
              x: -0.3,
              y: 0.7,
              content: 'now come, we have a race to win',
              direction: 'up-left',
              distance: 1,
              color: '#fff',
              speech: [
                {
                  x: -1,
                  content: 'yes, snow.',
                  direction: 'up-up-left',
                  distance: 0.8,
                  color: '#fff',
                  speech: [],
                },
              ],
            },
          ],
        },
      ],
      sprites: [
        {
          asset: 'images.tree_home_1',
          drawOrder: LAYERS.backSprites,
          // flipX: '*',
          size: 6.7,
          x: -4,
          y: 0,
          offset: Vector2(0, 0.4),
          anchored: true,
        },
        {
          asset: 'images.cabin_1',
          drawOrder: LAYERS.backSprites,
          flipX: '*',
          size: 6.1,
          x: -1,
          y: -1,
          offset: Vector2(0, 0.7),
          anchored: true,
        },
        {
          asset: 'images.tree_home_2',
          drawOrder: LAYERS.foreSprites,
          // flipX: '*',
          size: 6.1,
          x: 2,
          y: 0,
          offset: Vector2(0, 0.5),
          anchored: true,
        },
        {
          asset: 'images.tree_home_3',
          flipX: false,
          size: 6.4,
          x: 8,
          y: 0,
          offset: Vector2(0, 0.5),
          anchored: true,
        },
        {
          asset: 'images.crow',
          flipX: '*',
          size: 1,
          x: 32,
          y: 0,
          anchored: true,
        },
        {
          asset: 'images.logo_text',
          drawOrder: LAYERS.foreSprites,
          size: 20,
          x: 20,
          y: 15,
          anchored: false,
        },
        {
          asset: 'images.windmill',
          drawOrder: LAYERS.background + 1,
          anchored: false,
          fixed: true,
          y: 0.204,
          x: 0.1215,
          size: 400,
          rotatingSpeed: 0.2,
        },
      ],
      texts: [
        {
          x: 15,
          y: -6,
          size: 1.5,
          fill: '#c4acd4',
          content: 'A game about love and graphing.',
        },
      ],
      tips: [
        {
          content: 'click here!',
          domSelector: '#run-button',
          place: 'top-left',
          style: { fontSize: '1.1rem' },
        },
      ],
    } /*{
    name: 'Random',
    nick: 'RANDOM',
    colors: Colors.biomes.alps,
    x: 35,
    y: -25,
    requirements: [],
    defaultExpression: '0',
    hint: 'Soft eyes, grasshopper.',
    goals: [
      {
        type: 'dynamic',
        x: 6.7,
        y: 0
      },
    ],
    sledders: [{
      x: 0,
    }],
  },*/,
    ...SLOPE,
    ...EDITOR,
    //...POLAR,
    ...PARABOLA,
    ...WAVE,
    ...LOGISTIC,
    ...TIME,
    ...SWAMP,
    VOLCANO,
    CREDITS,
  ],
})

// Allows you to leave requirements as null to signify dependence on the previous level
for (world of worldData) {
  const levelData = world.levelData

  for (let i = 1; i < levelData.length; i++) {
    const d = levelData[i]

    if (d.requirements == null) {
      d.requirements = [levelData[i - 1].nick]
      continue
    }

    for (let j = 0; j < d.requirements.length; j++) {
      if (d.requirements[j] == null) {
        d.requirements[j] = [levelData[i - 1].nick]
      }
    }
  }
}
