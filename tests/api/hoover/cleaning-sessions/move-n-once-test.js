Feature('hoover')

Scenario('Move N once, no starting on dirty spot, no dirty spots to the N', async ({ I }) =>{
    const resp = await I.sendPostRequest('/cleaning-sessions', {
        "roomSize" : [5, 5],
        "coords" : [2, 2],
        "patches" : [
          [1, 0]
        ],
        "instructions" : "N"
    });
    I.seeResponseCodeIsSuccessful()
    I.seeResponseContainsKeys(['coords', 'patches']);
    I.seeResponseContainsJson({
          "coords": [2, 3],
          "patches": 0
      });
})

Scenario('Move N once, no starting dirty spot, dirty to the N', async ({ I }) =>{
    const resp = await I.sendPostRequest('/cleaning-sessions', {
        "roomSize" : [5, 5],
        "coords" : [2, 2],
        "patches" : [
          [2, 3]
        ],
        "instructions" : "N"
    });
    I.seeResponseCodeIsSuccessful()
    I.seeResponseContainsKeys(['coords', 'patches']);
    I.seeResponseContainsJson({
          "coords": [2, 3],
          "patches": 1
      });
})

Scenario('Move N once, starting dirty spot, dirty spot to the N', async ({ I }) =>{
    const resp = await I.sendPostRequest('/cleaning-sessions', {
        "roomSize" : [5, 5],
        "coords" : [2, 2],
        "patches" : [
          [2, 2],
          [2, 3]
        ],
        "instructions" : "N"
    });
    I.seeResponseCodeIsSuccessful()
    I.seeResponseContainsKeys(['coords', 'patches']);
    I.seeResponseContainsJson({
          "coords": [2, 3],
          "patches": 2
      });
})

Scenario('Move N once, starting dirty spot, no dirty spot to the N', async ({ I }) =>{
    const resp = await I.sendPostRequest('/cleaning-sessions', {
        "roomSize" : [5, 5],
        "coords" : [2, 2],
        "patches" : [
          [2, 2]
        ],
        "instructions" : "N"
    });
    I.seeResponseCodeIsSuccessful()
    I.seeResponseContainsKeys(['coords', 'patches']);
    I.seeResponseContainsJson({
          "coords": [2, 3],
          "patches": 1
      });
})

Scenario('Move N from origin, starting dirty spot, no dirty spot to the N', async ({ I }) =>{
  const resp = await I.sendPostRequest('/cleaning-sessions', {
      "roomSize" : [5, 5],
      "coords" : [0, 0],
      "patches" : [
        [2, 2],
        [0, 0]
      ],
      "instructions" : "N"
  });
  I.seeResponseCodeIsSuccessful()
  I.seeResponseContainsKeys(['coords', 'patches']);
  I.seeResponseContainsJson({
        "coords": [0, 1],
        "patches": 1
    });
})