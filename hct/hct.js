import axios from 'axios';

const URL = '/hst';

new Vue({
    el: '#app',
    data: {
	userinput: '',
	suggestWords: [],
	stations: []
    },
    methods: {
	//get_timetables(url, name
    },
    computed: {
	get_weekday_outbound_timetables: function() {
	    return axios.get(URL + '/weekday_outbound.json');
	},
	get_weekday_inbound_timetables: function() {
	    return axios.get(URL + '/weekday_inbound.json');
	},
	get_holiday_outbound_timetables: function() {
	    return axios.get(URL + '/holiday_outbound.json');
	},
	get_holiday_inbound_timetables: function() {
	    return axios.get(URL + '/holiday_inbound.json');
	}
    },
    watch: {
	userinput: function(val, oldVal) {
	    
	}
    }
})
