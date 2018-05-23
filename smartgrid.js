const smartgrid = require('smart-grid');

// SMARTGRID
let settings = {
	filename: "smart-grid",
	outputStyle: 'scss', /* less || scss || sass || styl */
	columns: 12, /* number of grid columns */
	offset: '30px', /* gutter width px || % */
	mobileFirst: false, /* mobileFirst ? 'min-width' : 'max-width' */
	container: {
		maxWidth: '1280px', /* max-width оn very large screen */
		fields: '55px' /* side fields */
	},
	breakPoints: {
		lg: {
			width: '1200px' /* -> @media (max-width: 1100px) */
		},
		md: {
			width: '992px'
		},
		sm: {
			width: '768px',
			fields: '30px'
		},
		xs: {
			width: '560px'
		}
	}
};

smartgrid('src/common/scss/mixins', settings);
