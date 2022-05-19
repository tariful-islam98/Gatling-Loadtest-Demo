var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "10",
        "ok": "10",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "309",
        "ok": "309",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "708",
        "ok": "708",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "476",
        "ok": "476",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "118",
        "ok": "118",
        "ko": "-"
    },
    "percentiles1": {
        "total": "487",
        "ok": "487",
        "ko": "-"
    },
    "percentiles2": {
        "total": "510",
        "ok": "510",
        "ko": "-"
    },
    "percentiles3": {
        "total": "671",
        "ok": "671",
        "ko": "-"
    },
    "percentiles4": {
        "total": "701",
        "ok": "701",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 10,
    "percentage": 100
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
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "5",
        "ok": "5",
        "ko": "-"
    }
},
contents: {
"req_get-all-users-fe8c4": {
        type: "REQUEST",
        name: "Get all users",
path: "Get all users",
pathFormatted: "req_get-all-users-fe8c4",
stats: {
    "name": "Get all users",
    "numberOfRequests": {
        "total": "5",
        "ok": "5",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "320",
        "ok": "320",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "708",
        "ok": "708",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "517",
        "ok": "517",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "140",
        "ok": "140",
        "ko": "-"
    },
    "percentiles1": {
        "total": "516",
        "ok": "516",
        "ko": "-"
    },
    "percentiles2": {
        "total": "625",
        "ok": "625",
        "ko": "-"
    },
    "percentiles3": {
        "total": "691",
        "ok": "691",
        "ko": "-"
    },
    "percentiles4": {
        "total": "705",
        "ok": "705",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 5,
    "percentage": 100
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
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.5",
        "ok": "2.5",
        "ko": "-"
    }
}
    },"req_get-specific-us-f41e8": {
        type: "REQUEST",
        name: "Get specific user",
path: "Get specific user",
pathFormatted: "req_get-specific-us-f41e8",
stats: {
    "name": "Get specific user",
    "numberOfRequests": {
        "total": "5",
        "ok": "5",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "309",
        "ok": "309",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "490",
        "ok": "490",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "436",
        "ok": "436",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "71",
        "ok": "71",
        "ko": "-"
    },
    "percentiles1": {
        "total": "486",
        "ok": "486",
        "ko": "-"
    },
    "percentiles2": {
        "total": "487",
        "ok": "487",
        "ko": "-"
    },
    "percentiles3": {
        "total": "489",
        "ok": "489",
        "ko": "-"
    },
    "percentiles4": {
        "total": "490",
        "ok": "490",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 5,
    "percentage": 100
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
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.5",
        "ok": "2.5",
        "ko": "-"
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
