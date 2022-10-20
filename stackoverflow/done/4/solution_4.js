let filteredCalc = [{
    "_id": "611cd9eae20bd167a796f884",
    "BeforeAccJob": "Antennenbauer/-in",
    "FuneralCost": 6,
    "FuneralCostWithSeverancePay": false,
    "FuneralCostSeverancePayDuration": 1,
    "FuneralCostDynamisationRate": 0.025,
    "FuneralCostCapitalisationRate": 0.025,
    "FuneralCostCostSharingAgreement": {
        "Active": false,
        "Rate": 1,
        "Limit": 0,
        "Unlimited": false,
        "__typename": "CostSharingAgreement"
    },
    "Miscellaneous": 300000.5,
    "MiscellaneousWithSeverancePay": false,
    "MiscellaneousSeverancePayDuration": 1,
    "MiscellaneousCapitalisationRate": 0.025,
    "MiscellaneousDynamisationRate": 0.025,
    "MiscellaneousCostSharingAgreement": {
        "Active": false,
        "Rate": 1,
        "Limit": 0,
        "Unlimited": false,
        "__typename": "CostSharingAgreement"
    },
    "__typename": "CalculationEntity",
    "Person": {
        "_id": "P30081568",
        "Firstname": "Nick",
        "Lastname": "Fury",
        "Birthday": "1976-10-10T00:00:00.000Z",
        "MaritalStatus": "NotSet",
        "Icds": [
            {
                "_id": 610262,
                "Mk": 3,
                "Code": "S12.24",
                "ActineoText": "Fraktur des 6. Halswirbels",
                "Text": "Fraktur des 6. Halswirbels",
                "Status": "unknown",
                "IsLeading": true,
                "__typename": "ProcessICD"
            },
            {
                "_id": 387908,
                "Mk": 4,
                "Code": "S71.88",
                "ActineoText": null,
                "Text": "Weichteilschaden II. Grades bei offener Fraktur oder Luxation der Hüfte und des Oberschenkels",
                "Status": "unknown",
                "IsLeading": true,
                "__typename": "ProcessICD"
            }
        ],
        "__typename": "Person"
    },
    "Blocks": [
        {
            "Name": "PropertyDamageCost",
            "IsRounded": false,
            "Coefficient": 1,
            "Sum": 1390,
            "WithSeverancePay": false,
            "SeverancePayDuration": 1,
            "CapitalisationRate": 0.025,
            "DynamisationRate": 1,
            "CostSharingAgreement": {
                "Active": false,
                "Rate": 1,
                "Limit": 0,
                "Unlimited": false,
                "__typename": "CostSharingAgreement"
            },
            "__typename": "CalculationBlock"
        },
        {
            "Name": "HealingTreatmentCost",
            "IsRounded": false,
            "Coefficient": 1,
            "Sum": 200,
            "WithSeverancePay": false,
            "SeverancePayDuration": 1,
            "CapitalisationRate": 0.025,
            "DynamisationRate": 1,
            "CostSharingAgreement": {
                "Active": false,
                "Rate": 1,
                "Limit": 0,
                "Unlimited": false,
                "__typename": "CostSharingAgreement"
            },
            "__typename": "CalculationBlock"
        },
        {
            "Name": "IncomeCost",
            "IsRounded": false,
            "Coefficient": 1,
            "Sum": 0,
            "WithSeverancePay": null,
            "SeverancePayDuration": null,
            "CapitalisationRate": 0.025,
            "DynamisationRate": 1,
            "CostSharingAgreement": {
                "Active": false,
                "Rate": 1,
                "Limit": 0,
                "Unlimited": false,
                "__typename": "CostSharingAgreement"
            },
            "__typename": "CalculationBlock"
        },
        {
            "Name": "HousekeepingDamageCost",
            "IsRounded": false,
            "Coefficient": 1,
            "Sum": 0,
            "WithSeverancePay": false,
            "SeverancePayDuration": 1,
            "CapitalisationRate": 0.025,
            "DynamisationRate": 1,
            "CostSharingAgreement": {
                "Active": false,
                "Rate": 1,
                "Limit": 0,
                "Unlimited": false,
                "__typename": "CostSharingAgreement"
            },
            "__typename": "CalculationBlock"
        },
        {
            "Name": "IncreasedNeeds",
            "IsRounded": false,
            "Coefficient": 1,
            "Sum": 0,
            "WithSeverancePay": false,
            "SeverancePayDuration": 1,
            "CapitalisationRate": 0.025,
            "DynamisationRate": 1,
            "CostSharingAgreement": {
                "Active": false,
                "Rate": 1,
                "Limit": 0,
                "Unlimited": false,
                "__typename": "CostSharingAgreement"
            },
            "__typename": "CalculationBlock"
        },
        {
            "Name": "DamageCost",
            "IsRounded": false,
            "Coefficient": 1,
            "Sum": 0,
            "WithSeverancePay": false,
            "SeverancePayDuration": 1,
            "CapitalisationRate": 0.025,
            "DynamisationRate": 1,
            "CostSharingAgreement": {
                "Active": false,
                "Rate": 1,
                "Limit": 0,
                "Unlimited": false,
                "__typename": "CostSharingAgreement"
            },
            "__typename": "CalculationBlock"
        },
        {
            "Name": "SurvivorsPensionCost",
            "IsRounded": false,
            "Coefficient": 1,
            "Sum": 0,
            "WithSeverancePay": false,
            "SeverancePayDuration": 1,
            "CapitalisationRate": 0.025,
            "DynamisationRate": 1,
            "CostSharingAgreement": {
                "Active": false,
                "Rate": 1,
                "Limit": 0,
                "Unlimited": false,
                "__typename": "CostSharingAgreement"
            },
            "__typename": "CalculationBlock"
        },
        {
            "Name": "MaintenanceDamageCost",
            "IsRounded": false,
            "Coefficient": 1,
            "Sum": 0,
            "WithSeverancePay": false,
            "SeverancePayDuration": 1,
            "CapitalisationRate": 0.025,
            "DynamisationRate": 1,
            "CostSharingAgreement": {
                "Active": false,
                "Rate": 1,
                "Limit": 0,
                "Unlimited": false,
                "__typename": "CostSharingAgreement"
            },
            "__typename": "CalculationBlock"
        }
    ]
}];

let personTableData = filteredCalc.map((calc, index) => {
    return {
        key: index,
        personName: `${calc.Person.Firstname} ${calc.Person.Lastname}`,
        personBirthday: `${calc.Person.Birthday}`,
        personMaritalStatus: calc.Person.MaritalStatus,
        jobBeforeAccident: calc.BeforeAccJob,
        leadingDiagnosis: calc.Person.Icds.map((icd, index2) => {
            if(icd.Code && icd.Text && icd.Mk){
                return `<div key=${index}>
                    <b style="color:#d9650d">${icd.Code}:</b>${icd.Text}
                    <div style="marginTop:3px;marginBottom:3px;">
                        <b>Schweregrad:</b>${icd.Mk}
                    </div>
                </div>`
            } else {
                return "no entry";
            }
        })
    }
});

console.log(personTableData)