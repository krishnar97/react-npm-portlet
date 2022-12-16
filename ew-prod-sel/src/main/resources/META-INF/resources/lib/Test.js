import React, { useState } from "react";
import ClayButton from '@clayui/button';

function Test() {
	const [value,setValue] = useState()
  return (<>
    <h1> React Tablib Portlet </h1>
    <ClayButton displayType="primary">
	Button Primary
</ClayButton>
	</>
  );
}

export default Test;
