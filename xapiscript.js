function send_statement(){
        var conf = {
             "endpoint" : "https://lrs.adlnet.gov/xapi/",
             "auth" : "Basic " + toBase64("xapi-tools:xapi-tools")
             };

        ADL.XAPIWrapper.changeConfig(conf);
         
        //define the xapi statement being sent
        var statement = {
            "actor": {
                "mbox": "mailto:Tester@example.com",
                "name": "Your Name Here",
                "objectType": "Agent"
            },
            "verb": {
                "id": "http://example.com/xapi/interacted",
                "display": {"en-US": "interacted"}
            },
            "object": {
                "id": "http://example.com/button_example",
                "definition": {
                    "name": {"en-US": "Button example"},
                    "description": {"en-US": "Example xAPI Button"}
                },
                "objectType": "Activity"
            }
        }; //end statement definition
 
        // Dispatch the statement to the LRS
        var result = ADL.XAPIWrapper.sendStatement(statement);
        }
