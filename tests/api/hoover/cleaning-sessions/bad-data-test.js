Feature('hoover')

Scenario('Bad Data - Patches Out of Bounds for room', async ({ I }) =>{
    const resp = await I.sendPostRequest('/cleaning-sessions', {
        "roomSize" : [10, 10],
        "coords" : [0, 0],
        "patches" : [
          [0, 0],
          [3, 3],
          [25, 25],
          [65, 65],
          [90, 90]
        ],
        "instructions" : "SENWWSEENNSWWSENWSENW"
    });
    I.seeResponseCodeIsSuccessful()
    I.seeResponseContainsKeys(['coords', 'patches']);
    I.seeResponseContainsJson({
          "coords": [0, 1],
          "patches": 2
      });
  })

  Scenario('Bad Data - Wrong characters in instructions', async ({ I }) =>{
    const resp = await I.sendPostRequest('/cleaning-sessions', {
        "roomSize" : [10, 10],
        "coords" : [0, 0],
        "patches" : [
          [0, 0],
          [3, 3],
        ],
        "instructions" : "SErWWSEENNSWWSENWSENW"
    });
    I.seeResponseCodeIsClientError();
  })

  Scenario('Bad Data - Starting coordinates out of bounds', async ({ I }) =>{
    const resp = await I.sendPostRequest('/cleaning-sessions', {
        "roomSize" : [10, 10],
        "coords" : [45, 54],
        "patches" : [
          [0, 0],
          [3, 3],
        ],
        "instructions" : "SENWWSEENNSWWSENWSENW"
    });
    I.seeResponseCodeIsClientError();
  })

  Scenario('Bad Data - Size 0 room', async ({ I }) =>{
    const resp = await I.sendPostRequest('/cleaning-sessions', {
        "roomSize" : [0, 0],
        "coords" : [0, 0],
        "patches" : [
          [0, 0],
        ],
        "instructions" : "SENWWSEENNSWWSENWSENW"
    });
    I.seeResponseCodeIsClientError();
  })