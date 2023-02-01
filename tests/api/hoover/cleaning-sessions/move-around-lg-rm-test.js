Feature('hoover')

const perimeterInstruct = "E".repeat(99) + "N".repeat(99) + "W".repeat(99) + "S".repeat(99)
const middleInstruct = "EN".repeat(49)
const cornerInstruct = "EN".repeat(99)

Scenario('Move around 100x100 perimeter', async ({ I }) =>{
    const resp = await I.sendPostRequest('/cleaning-sessions', {
        "roomSize" : [100, 100],
        "coords" : [0, 0],
        "patches" : [
          [0, 9],
          [45, 99],
          [0, 99],
          [1, 0],
          [2, 0],
          [1, 2],
          [6, 9],
          [0, 0]
        ],
        "instructions" : perimeterInstruct
    });
    I.seeResponseCodeIsSuccessful()
    I.seeResponseContainsKeys(['coords', 'patches']);
    I.seeResponseContainsJson({
          "coords": [0, 0],
          "patches": 6
      });
})

Scenario('Move to middle of 100x100 room 2 patches', async ({ I }) =>{
    const resp = await I.sendPostRequest('/cleaning-sessions', {
        "roomSize" : [100, 100],
        "coords" : [0, 0],
        "patches" : [
          [0, 0],
          [3, 3]
        ],
        "instructions" : middleInstruct
    });
    I.seeResponseCodeIsSuccessful()
    I.seeResponseContainsKeys(['coords', 'patches']);
    I.seeResponseContainsJson({
          "coords": [49, 49],
          "patches": 2
      });
})


Scenario('Move to upper right corner 100x100 room 5 patches', async ({ I }) =>{
  const resp = await I.sendPostRequest('/cleaning-sessions', {
      "roomSize" : [100, 100],
      "coords" : [0, 0],
      "patches" : [
        [0, 0],
        [3, 3],
        [25, 25],
        [65, 65],
        [90, 90]
      ],
      "instructions" : cornerInstruct
  });
  I.seeResponseCodeIsSuccessful()
  I.seeResponseContainsKeys(['coords', 'patches']);
  I.seeResponseContainsJson({
        "coords": [99, 99],
        "patches": 5
    });
})