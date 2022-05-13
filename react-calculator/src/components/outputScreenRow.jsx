// Import React (Mandatory Step).
import React from 'react';

const OutputScreenRow = (props) => {
return (
	<div className="screen-row">
	<input type="text" readOnly value = {props.value}/>
	</div>
)
}

// Export Output Screen Row.
export default OutputScreenRow;
