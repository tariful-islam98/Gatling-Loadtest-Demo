var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "64",
        "ok": "56",
        "ko": "8"
    },
    "minResponseTime": {
        "total": "105",
        "ok": "105",
        "ko": "284"
    },
    "maxResponseTime": {
        "total": "731",
        "ok": "731",
        "ko": "316"
    },
    "meanResponseTime": {
        "total": "389",
        "ok": "403",
        "ko": "294"
    },
    "standardDeviation": {
        "total": "146",
        "ok": "151",
        "ko": "10"
    },
    "percentiles1": {
        "total": "356",
        "ok": "405",
        "ko": "292"
    },
    "percentiles2": {
        "total": "489",
        "ok": "546",
        "ko": "296"
    },
    "percentiles3": {
        "total": "607",
        "ok": "610",
        "ko": "310"
    },
    "percentiles4": {
        "total": "664",
        "ok": "673",
        "ko": "315"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 56,
    "percentage": 88
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 8,
    "percentage": 13
},
    "meanNumberOfRequestsPerSecond": {
        "total": "9.143",
        "ok": "8",
        "ko": "1.143"
    }
},
contents: {
"req_get-specific-us-f41e8": {
        type: "REQUEST",
        name: "Get specific user",
path: "Get specific user",
pathFormatted: "req_get-specific-us-f41e8",
stats: {
    "name": "Get specific user",
    "numberOfRequests": {
        "total": "64",
        "ok": "56",
        "ko": "8"
    },
    "minResponseTime": {
        "total": "105",
        "ok": "105",
        "ko": "284"
    },
    "maxResponseTime": {
        "total": "731",
        "ok": "731",
        "ko": "316"
    },
    "meanResponseTime": {
        "total": "389",
        "ok": "403",
        "ko": "294"
    },
    "standardDeviation": {
        "total": "146",
        "ok": "151",
        "ko": "10"
    },
    "percentiles1": {
        "total": "356",
        "ok": "405",
        "ko": "292"
    },
    "percentiles2": {
        "total": "489",
        "ok": "546",
        "ko": "296"
    },
    "percentiles3": {
        "total": "607",
        "ok": "610",
        "ko": "310"
    },
    "percentiles4": {
        "total": "664",
        "ok": "673",
        "ko": "315"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 56,
    "percentage": 88
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 8,
    "percentage": 13
},
    "meanNumberOfRequestsPerSecond": {
        "total": "9.143",
        "ok": "8",
        "ko": "1.143"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
