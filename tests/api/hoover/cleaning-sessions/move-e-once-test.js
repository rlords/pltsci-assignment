Feature('hoover')

Scenario('Move E once, no starting on dirty spot, no dirty spots to the E', async ({ I }) =>{
    const resp = await I.sendPostRequest('/cleaning-sessions', {
        "roomSize" : [5, 5],
        "coords" : [2, 2],
        "patches" : [
          [1, 0]
        ],
        "instructions" : "E"
    });
    I.seeResponseCodeIsSuccessful()
    I.seeResponseContainsKeys(['coords', 'patches']);
    I.seeResponseContainsJson({
          "coords": [3, 2],
          "patches": 0
      });
})

Scenario('Move E once, no starting dirty spot, dirty to the east', async ({ I }) =>{
    const resp = await I.sendPostRequest('/cleaning-sessions', {
        "roomSize" : [5, 5],
        "coords" : [2, 2],
        "patches" : [
          [3, 2]
        ],
        "instructions" : "E"
    });
    I.seeResponseCodeIsSuccessful()
    I.seeResponseContainsKeys(['coords', 'patches']);
    I.seeResponseContainsJson({
          "coords": [3, 2],
          "patches": 1
      });
})

Scenario('Move E once, starting dirty spot, dirty spot to the east', async ({ I }) =>{
    const resp = await I.sendPostRequest('/cleaning-sessions', {
        "roomSize" : [5, 5],
        "coords" : [2, 2],
        "patches" : [
          [3, 2],
          [2, 2]
        ],
        "instructions" : "E"
    });
    I.seeResponseCodeIsSuccessful()
    I.seeResponseContainsKeys(['coords', 'patches']);
    I.seeResponseContainsJson({
          "coords": [3, 2],
          "patches": 2
      });
})

Scenario('Move E once, starting dirty spot, no dirty spot to the east', async ({ I }) =>{
    const resp = await I.sendPostRequest('/cleaning-sessions', {
        "roomSize" : [5, 5],
        "coords" : [2, 2],
        "patches" : [
          [2, 2]
        ],
        "instructions" : "E"
    });
    I.seeResponseCodeIsSuccessful()
    I.seeResponseContainsKeys(['coords', 'patches']);
    I.seeResponseContainsJson({
          "coords": [3, 2],
          "patches": 1
      });
})

Scenario('Move E from origin, starting dirty spot, no dirty spot to the east', async ({ I }) =>{
  const resp = await I.sendPostRequest('/cleaning-sessions', {
      "roomSize" : [5, 5],
      "coords" : [0, 0],
      "patches" : [
        [2, 2],
        [0, 0]
      ],
      "instructions" : "E"
  });
  I.seeResponseCodeIsSuccessful()
  I.seeResponseContainsKeys(['coords', 'patches']);
  I.seeResponseContainsJson({
        "coords": [1, 0],
        "patches": 1
    });
})