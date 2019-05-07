/**
 * Auto-generated action file for "Beanstream Payments" API.
 *
 * Generated at: 2019-05-07T14:39:37.106Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / beanstream-com-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: undefined
 * Endpoint Path: '/payments/{transId}/completions'
 * Method: 'post'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "transId"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "transId": "transId",
    "amount": "amount",
    "address_line1": "address_line1",
    "address_line2": "address_line2",
    "city": "city",
    "country": "country",
    "email_address": "email_address",
    "name": "name",
    "phone_number": "phone_number",
    "postal_code": "postal_code",
    "province": "province",
    "billing": "billing",
    "complete": "complete",
    "cvd": "cvd",
    "expiry_month": "expiry_month",
    "expiry_year": "expiry_year",
    "number": "number",
    "card": "card",
    "comments": "comments",
    "ref1": "ref1",
    "ref2": "ref2",
    "ref3": "ref3",
    "ref4": "ref4",
    "ref5": "ref5",
    "custom": "custom",
    "customer_ip": "customer_ip",
    "language": "language",
    "order_number": "order_number",
    "payment_method": "payment_method",
    "card_id": "card_id",
    "customer_code": "customer_code",
    "payment_profile": "payment_profile",
    "shipping": "shipping",
    "term_url": "term_url",
    "code": "code",
    "token": "token",
    "requestBody": "requestBody"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = 'application/json';

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};

    let callParams = {
        spec: spec,
        operationId: undefined,
        pathName: '/payments/{transId}/completions',
        method: 'post',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}