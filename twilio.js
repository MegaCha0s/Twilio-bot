var accountSID='ACac2e93e8e83feb27b9a6ceaa620cdf50';
var authToken='f55225061e6c2997d338a97a7843ac41';

var twilio=require('twilio');
var app=require('express');

var client=new twilio.RestClient(accountSID,authToken);

client.messages.create({
	body: 'Hello from Nishan',
	to: '+919706498840',
	from: '+14153902803'
},function(err,message){
	if(err){
		console.error(err.message);
	}
});


