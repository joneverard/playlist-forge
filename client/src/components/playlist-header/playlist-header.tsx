import React from "react";
import { Checkbox, Button, Select, Input } from "antd";

import styles from "./playlist-header.module.scss";

const { Option } = Select;
// what does this component need.
// set of "actions" to place at the top.

const PlaylistHeader = () => {
  return (
    <div className={styles.container}>
      <div>
        <Checkbox />
        {"Select all"}
      </div>
      <div>
        <SelectItems />
      </div>
      <div>
        <Button type="primary">Save</Button>
      </div>
    </div>
  );
};

export default PlaylistHeader;

const SelectItems = () => {
  return (
    <Input.Group compact>
      <Select defaultValue="Option1-1">
        <Option value="Option1-1">Option1-1</Option>
        <Option value="Option1-2">Option1-2</Option>
      </Select>
      <Select defaultValue="Option2-2">
        <Option value="Option2-1">Option2-1</Option>
        <Option value="Option2-2">Option2-2</Option>
      </Select>
    </Input.Group>
  );
};
