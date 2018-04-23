const axios = require('axios');

const slackInfo = requested => () => new Promise((resolve, reject) => {
	axios.get(`https://slack.com/api/${requested}.list?token=${process.env.SLACK_TOKEN}`)
		.then( ({data}) =>  {
			let info = {};
			const channels = (requested === 'conversations');
		    data = channels ? data.channels : data.members;
		    data.forEach(ele => { channels ? 
		    						info[ele.id] = ele.name :
		    						info[ele.id] = { name: ele.name, 
		    										 real_name: ele.real_name 
		    										}
		    					});
		    resolve(info);
		})
		.catch(err => reject(err))
})

module.exports = {
	getChannels: slackInfo('conversations'),
	getUsers: slackInfo('users')
}