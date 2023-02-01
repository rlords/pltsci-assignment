Feature('hoover')

Scenario('Move W once, no starting dirty spot, no dirty spots to the W', async ({ I }) =>{
    const resp = await I.sendPostRequest('/cleaning-sessions', {
        "roomSize" : [5, 5],
        "coords" : [2, 2],
        "patches" : [
          [1, 0]
        ],
        "instructions" : "W"
    });
    I.seeResponseCodeIsSuccessful()
    I.seeResponseContainsKeys(['coords', 'patches']);
    I.seeResponseContainsJson({
          "coords": [1, 2],
          "patches": 0
      });
})

Scenario('Move W once, no starting dirty spot, dirty spots to the W', async ({ I }) =>{
    const resp = await I.sendPostRequest('/cleaning-sessions', {
        "roomSize" : [5, 5],
        "coords" : [2, 2],
        "patches" : [
          [1, 0],
          [1, 2]
        ],
        "instructions" : "W"
    });
    I.seeResponseCodeIsSuccessful()
    I.seeResponseContainsKeys(['coords', 'patches']);
    I.seeResponseContainsJson({
          "coords": [1, 2],
          "patches": 1
      });
})

Scenario('Move W from origin, no starting dirty spot', async ({ I }) =>{
  const resp = await I.sendPostRequest('/cleaning-sessions', {
      "roomSize" : [5, 5],
      "coords" : [0, 0],
      "patches" : [
        [1, 0],
        [1, 2]
      ],
      "instructions" : "W"
  });
  I.seeResponseCodeIsSuccessful()
  I.seeResponseContainsKeys(['coords', 'patches']);
  I.seeResponseContainsJson({
        "coords": [0, 0],
        "patches": 0
    });
})
