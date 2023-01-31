Feature('Hoover')

Scenario('Move around randomly, no patches', async ({ I }) =>{
    const resp = await I.sendPostRequest('/cleaning-sessions', {
        "roomSize" : [5, 5],
        "coords" : [2, 2],
        "patches" : [
        ],
        "instructions" : "SENWWSEENNSWWSENWSENW"
      });
    console.log(resp)
    I.seeResponseCodeIsSuccessful()
    I.seeResponseContainsKeys(['coords', 'patches']);
    I.seeResponseContainsJson({
          "coords": [1, 2],
          "patches": 0
      });
})

Scenario('Move around in circles SENW, no patches', async ({ I }) =>{
    const resp = await I.sendPostRequest('/cleaning-sessions', {
        "roomSize" : [5, 5],
        "coords" : [2, 2],
        "patches" : [
        ],
        "instructions" : "SENWSENWSENWSENWSENWSENWSENWSENWSENWSENWSENW"
      });
    console.log(resp)
    I.seeResponseCodeIsSuccessful()
    I.seeResponseContainsKeys(['coords', 'patches']);
    I.seeResponseContainsJson({
          "coords": [2, 2],
          "patches": 0
      });
})