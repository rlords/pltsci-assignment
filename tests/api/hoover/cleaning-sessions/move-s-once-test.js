Feature('hoover')

Scenario('Move S once, no starting on dirty spot, no dirty spots to the S', async ({ I }) =>{
    const resp = await I.sendPostRequest('/cleaning-sessions', {
        "roomSize" : [5, 5],
        "coords" : [2, 2],
        "patches" : [
          [1, 0]
        ],
        "instructions" : "S"
    });
    I.seeResponseCodeIsSuccessful()
    I.seeResponseContainsKeys(['coords', 'patches']);
    I.seeResponseContainsJson({
          "coords": [2, 1],
          "patches": 0
      });
})

Scenario('Move S once, no starting dirty spot, dirty to the S', async ({ I }) =>{
    const resp = await I.sendPostRequest('/cleaning-sessions', {
        "roomSize" : [5, 5],
        "coords" : [2, 2],
        "patches" : [
          [2, 1]
        ],
        "instructions" : "S"
    });
    I.seeResponseCodeIsSuccessful()
    I.seeResponseContainsKeys(['coords', 'patches']);
    I.seeResponseContainsJson({
          "coords": [2, 1],
          "patches": 1
      });
})

Scenario('Move S once, starting dirty spot, dirty spot to the S', async ({ I }) =>{
    const resp = await I.sendPostRequest('/cleaning-sessions', {
        "roomSize" : [5, 5],
        "coords" : [2, 2],
        "patches" : [
          [2, 2],
          [2, 1]
        ],
        "instructions" : "S"
    });
    I.seeResponseCodeIsSuccessful()
    I.seeResponseContainsKeys(['coords', 'patches']);
    I.seeResponseContainsJson({
          "coords": [2, 1],
          "patches": 2
      });
})

Scenario('Move S once, starting dirty spot, no dirty spot to the S', async ({ I }) =>{
    const resp = await I.sendPostRequest('/cleaning-sessions', {
        "roomSize" : [5, 5],
        "coords" : [2, 2],
        "patches" : [
          [2, 2]
        ],
        "instructions" : "S"
    });
    I.seeResponseCodeIsSuccessful()
    I.seeResponseContainsKeys(['coords', 'patches']);
    I.seeResponseContainsJson({
          "coords": [2, 1],
          "patches": 1
      });
})

Scenario('Move S from origin, starting dirty spot, no dirty spot to the S', async ({ I }) =>{
  const resp = await I.sendPostRequest('/cleaning-sessions', {
      "roomSize" : [5, 5],
      "coords" : [0, 0],
      "patches" : [
        [2, 2],
        [0, 0]
      ],
      "instructions" : "S"
  });
  I.seeResponseCodeIsSuccessful()
  I.seeResponseContainsKeys(['coords', 'patches']);
  I.seeResponseContainsJson({
        "coords": [0, 0],
        "patches": 1
    });
})