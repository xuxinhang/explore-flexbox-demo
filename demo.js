new Vue({
	el: '#display',
	data: {
		'proplist': ['block', 'block', 'block', 'block', 'block', 'block'],
		'allowedValue': ['block', 'inline', 'inline-block', 'table-cell', 'none', 'flex'],
	},
})

new Vue({
	el: '#width',
	data: {
		'indexs': [0,1,2],
		'minw': [0, 0, 0],
		'maxw': [800, 800, 800],
		'width': [undefined, undefined, undefined],
		'basis': [undefined, undefined, undefined],
		'grow': [0,0,0],
		'shrink': [0,0,0],
		//
		'eminw': [0, 0, 0],
		'emaxw': [0, 0, 0],
		'ewidth': [0, 0, 0],
		'ebasis': [0, 0, 0],
		'egrow': [0,0,0],
		'eshrink': [0,0,0],
			//
		'propslist': [],
	},
	computed: {
		'stprops': function(){
			var ret = [];
			for(var i=0; i<3; i++){
				var elit= {
					'min-width': this.eminw[i]? this.minw[i] : undefined,
					'max-width': this.emaxw[i]? this.maxw[i] : undefined,
					'flex-grow': this.egrow[i]? this.grow[i] : undefined,
					'flex-shrink': this.eshrink[i]? this.shrink[i] : undefined,
					'flex-basis': this.ebasis[i]? this.basis[i] : undefined,
					'width': this.ewidth[i]? this.width[i] : undefined,
				};
				console.log(elit);
				ret.push(elit);
			}
			return ret;
		},
	},
	methods: {
		updateData: function(){
			var ret = [];
			for(var i=0; i<3; i++){
				var elit= {
					'min-width': this.eminw[i]? this.minw[i]+'px' : undefined,
					'max-width': this.emaxw[i]? this.maxw[i]+'px' : undefined,
					'flex-grow': this.egrow[i]? this.grow[i] : undefined,
					'flex-shrink': this.eshrink[i]? this.shrink[i] : undefined,
					'flex-basis': this.ebasis[i]? this.basis[i]+'px' : undefined,
					'width': this.ewidth[i]? this.width[i]+'px' : undefined,
					// 'overflow': 'hidden',
				};
				//console.log(elit);
				ret.push(elit);
			}
			this.propslist.splice(0, this.propslist.length, ret[0], ret[1], ret[2]);
			return ret;
		},
	},
	updated: function(){
		this.updateData();
	},
})