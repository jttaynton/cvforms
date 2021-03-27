const formDef = {
    "id": "ee9c87ad-6cec-4f7e-9d8a-f84cb4252d09",
    "type": "basic-form",
    "title": "Savio's Donkey Farm Checklist",
    "description": "Bacon ipsum dolor amet turducken flank jowl sausage cow ground round, strip steak capicola shankle kevin bresaola ham ribeye t-bone short ribs. Chislic tail beef, cupim turkey capicola pancetta tenderloin filet mignon short ribs. Andouille buffalo pastrami turducken ball tip. Cupim venison ball tip, ham swine hamburger bacon meatloaf kielbasa capicola short ribs pancetta flank corned beef. Pork pork chop tri-tip filet mignon meatball picanha.",
    "sections": [
        {
            "title": "Basic Info",
            "description": "Bacon ipsum dolor amet tri-tip corned beef ball tip burgdoggen beef, rump beef ribs. Porchetta hamburger bresaola pancetta pork chop ground round. Chislic venison ribeye, tail sirloin short loin biltong landjaeger ham swine tongue. Bresaola salami kielbasa pig. Meatball prosciutto beef ribs jerky. Chislic capicola t-bone cow.",
            "controls": [
                {
                    "type": "input",
                    "sizes": { "xs": 12, "md": 4 },
                    "config": {
                        "label": "Name",
                        "required": true
                    },
                    "prop": "name"
                },
                {
                    "type": "input",
                    "sizes": { "xs": 12, "md": 4 },
                    "config": {
                        "label": "Town",
                        "required": true
                    },
                    "prop": "town"
                },
                {
                    "type": "drop-down",
                    "sizes": { "xs": 12, "md": 4 },
                    "config": {
                        "label": "Are donkeys cool?",
                        "required": true,
                        "options": [
                            { "label": "Yes!!! 👍", "value": true },
                            { "label": "Nope 👎", "value": false }
                        ]
                    },
                    "prop": "cool"
                },
                {
                    "type": "text",
                    "sizes": { "xs": 12, "md": 6 },
                    "data": "Donkey Recipient"
                },
                {
                    "type": "input",
                    "sizes": { "xs": 12, "md": 6 },
                    "config": {
                        "label": "Recipient",
                        "placeholder": "who did it?",
                        "required": true
                    },
                    "prop": "inputA"
                },
            ]
        },
        {
            "title": "Other Info",
            "description": "T-bone boudin buffalo picanha jerky venison filet mignon. Sausage landjaeger shankle, ham burgdoggen pig boudin jowl swine porchetta. Shank short loin cupim pork bresaola. Meatball kevin burgdoggen jowl chicken ham turducken. Chislic tail turducken capicola pig porchetta short loin cupim picanha landjaeger. Sausage turducken flank andouille, short loin ribeye kielbasa leberkas shankle ham picanha prosciutto beef hamburger. Chuck landjaeger filet mignon chislic ham hock rump ribeye bresaola kevin turducken.",
            "controls": [
                {
                    "type": "text",
                    "sizes": { "xs": 12, "md": 6 },
                    "data": "How many times has Savio been donkeyed?"
                },
                {
                    "type": "input-numeric",
                    "sizes": { "xs": 12, "md": 6 },
                    "config": {
                        "label": "How many?",
                        "placeholder": "For real?",
                        "required": true
                    },
                    "prop": "inputB"
                },
                {
                    "type": "text",
                    "sizes": { "xs": 12, "md": 4 },
                    "data": "This is a multi-line input."
                },
                {
                    "type": "input-multiline",
                    "sizes": { "xs": 12, "md": 8 },
                    "config": {
                        "label": "My lots of text input",
                        "placeholder": "Put some long shit in there",
                        "rows": 8
                    },
                    "prop": "inputC"
                },
            ]
        },
        {
            "title": "Last Info",
            "description": "Cupim strip steak porchetta meatloaf, filet mignon short ribs kevin picanha sausage flank short loin buffalo bacon. Pancetta picanha chislic, tongue turducken chicken t-bone beef sausage pork cow ham hock swine tri-tip. Bresaola beef tri-tip tenderloin andouille. Ball tip buffalo bresaola rump jerky, frankfurter chislic hamburger beef kevin. Landjaeger filet mignon tri-tip pastrami ham ham hock pork chop bresaola drumstick jerky.",
            "controls": [
                {
                    "type": "text",
                    "sizes": { "xs": 12, "md": 4 },
                    "data": "This is a multi-line input."
                },
                {
                    "type": "input-multiline",
                    "sizes": { "xs": 12, "md": 8 },
                    "config": {
                        "label": "My lots of text input",
                        "placeholder": "Put some long shit in there",
                        "rows": 3
                    },
                    "prop": "inputD"
                }
            ]
        },
    ]

}

export default formDef;