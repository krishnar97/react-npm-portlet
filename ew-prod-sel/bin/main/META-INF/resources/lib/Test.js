import React, { useState } from "@liferay/frontend-data-set-web";
import ClayButton from "@clayui/button";
import ClayForm, { ClayInput } from "@clayui/form";
import ClayMultiSelect from "@clayui/multi-select";

function Test() {
  const [value, setValue] = useState("");
  const [items, setItems] = useState([
    {
      label: "one",
      value: "1",
    },
  ]);

  const sourceItems = [
    {
      label: "one",
      value: "1",
    },
    {
      label: "two",
      value: "2",
    },
    {
      label: "three",
      value: "3",
    },
    {
      label: "four",
      value: "4",
    },
  ];

  return (
    <ClayForm.Group>
      <ClayInput.Group>
        <ClayInput.GroupItem>
          <ClayMultiSelect
            inputName="myInput"
            items={items}
            onChange={setValue}
            onItemsChange={setItems}
            sourceItems={sourceItems}
            spritemap={Liferay.Icons.spritemap}
            value={value}
          />
        </ClayInput.GroupItem>
        <ClayInput.GroupItem shrink>
          <ClayButton displayType="secondary" onClick={() => alert("Click")}>
            {"Select"}
          </ClayButton>
        </ClayInput.GroupItem>
      </ClayInput.Group>
    </ClayForm.Group>
  );
}

export default Test;
