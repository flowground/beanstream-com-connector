# ![LOGO](logo.png) Beanstream Payments **flow**ground Connector

## Description

A generated **flow**ground connector for the Beanstream Payments API (version 1.0.1).

Generated from: https://api.apis.guru/v2/specs/beanstream.com/1.0.1/swagger.json<br/>
Generated at: 2019-05-07T17:39:37+03:00

## API Description

https://www.beanstream.com/api/v1

## Authorization

This API does not require authorization.

## Actions

### Make Payment

> Make a payment using credit card, cash, cheque, profile, or token. Each payment type has its own json definition passed in the body. For all payments you have the standard Billing, Shipping, Comments, etc. fields that are optional. Only the amount is required along with the payment data for card, cash, cheque, profile, and token. You must change the payment_method for each payment type. Credit Card - "card", Payment Profile - "payment_profile", Legato Token - "token", Cash - "cash", Cheque - "cheque", Interac - "interac"

*Tags:* `Payments`

### Get payment

> Get a previous payment (transaction).

*Tags:* `Payments`

#### Input Parameters
* `transId` - _required_ - The transaction id.

### Complete pre-auth

> Complete a pre-authorized payment. The amount of the transaction to complete must be less than or equal to the original pre-auth amount. Complete must be set to true.

*Tags:* `Payments`

#### Input Parameters
* `transId` - _required_ - The transaction id.

### Return payment

> Return payment.

*Tags:* `Payments`

#### Input Parameters
* `transId` - _required_ - The transaction id.

### Void Transaction

> Void a transaction. You can void payments, returns, pre-auths, and completions. It will cancel that transaction.

*Tags:* `Payments`

#### Input Parameters
* `transId` - _required_ - The transaction id to void.

### Create Profile

> Create a new Payment Profile using either a card or a Legato token. You must supply one of them.

*Tags:* `Profiles`

### Delete profile

> Delete a Payment Profile using the profile ID, also known as the Customer Code.

*Tags:* `Profiles`

#### Input Parameters
* `profileId` - _required_ - The profile id. (aka CustomerCode)

### Get profile

> Get a Payment Profile using the profile ID, also known as the Customer Code.

*Tags:* `Profiles`

#### Input Parameters
* `profileId` - _required_ - The profile id. (aka CustomerCode)

### Update Profile

> Create a new Payment Profile using either a card or a Legato token. You must supply one of them.

*Tags:* `Profiles`

#### Input Parameters
* `profileId` - _required_ - The profile id. (aka CustomerCode)

### Get cards

> Get all of the cards on the profile.

*Tags:* `Profiles`

#### Input Parameters
* `profileId` - _required_ - The profile id. (aka CustomerCode)

### Add card

> Add a card to the profile. Note that there is a default limit of 1 card per profile. You can change this in your Profiles settings in the back office.

*Tags:* `Profiles`

#### Input Parameters
* `profileId` - _required_ - The profile id. (aka CustomerCode)

### Delete card

> Delete a card on the profile.

*Tags:* `Profiles`

#### Input Parameters
* `profileId` - _required_ - The profile id. (aka CustomerCode)
* `cardId` - _required_ - The card id.

### Update card

> Update the details of a card on the profile.

*Tags:* `Profiles`

#### Input Parameters
* `profileId` - _required_ - The profile id. (aka CustomerCode)
* `cardId` - _required_ - The card id.

### Search Query

> Query for transactions using a date range and optional search criteria. This method allows you to page your search results if you are expecting a lot of results to be returned. The page start value begins at 1. If no records are found the API will return a 404 error message. For details on the parameters and allowed values for Criteria please visit the documentation http://developer.beanstream.com/documentation/analyze-payments/search-specific-criteria/

*Tags:* `Reporting`

### Tokenize credit card

> NOTE that the full URL for this API call is https://www.beanstream.com/scripts/tokenization/tokens. Turn a credit card into a token using this service. This helps lessen your PCI scope by not passing the credit card information to your server. Instead you turn the card number into a token in the client app, then send the token to the server. When you send the token to Beanstream to make a payment, Beanstream then looks up the card number from that token and makes the payment. Tokens can also be used to create payment profiles.

*Tags:* `Tokenization`

## License

**flow**ground :- Telekom iPaaS / beanstream-com-connector<br/>
Copyright © 2019, [Deutsche Telekom AG](https://www.telekom.de)<br/>
contact: flowground@telekom.de

All files of this connector are licensed under the Apache 2.0 License. For details
see the file LICENSE on the toplevel directory.
