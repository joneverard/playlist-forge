import React from "react";
import { get } from "lodash";
import { Checkbox, Button, Select, Input } from "antd";

import { SELECT_ALL, DESELECT_ALL } from "state/playlists/playlists-reducer";
import { ADD_TRACKS } from "state/saved-items/saved-items";

import styles from "./playlist-header.module.scss";

const { Option } = Select;

const PlaylistHeader = ({ playlist, dispatch }) => {
  const tracks = get(playlist, "tracks.items", []);
  const allSelected = tracks.length && tracks.every((item) => item.selected);
  const indeterminate = tracks.some((item) => item.selected) && !allSelected;

  const onClickSelectAll = () => {
    if (indeterminate || allSelected) {
      dispatch({ type: DESELECT_ALL });
    } else {
      dispatch({ type: SELECT_ALL });
    }
  };

  const onClickSave = () => {
    const selectedItems = tracks.filter((track) => track.selected);
    dispatch({ type: ADD_TRACKS, payload: selectedItems });
    dispatch({ type: DESELECT_ALL });
  };

  return (
    <div className={styles.container}>
      <SelectAll
        onChange={onClickSelectAll}
        checked={allSelected}
        indeterminate={indeterminate}
      />
      <div>
        <SelectItems />
      </div>
      <div>
        <Button type="primary" onClick={onClickSave}>
          Save
        </Button>
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

const SelectAll = ({ onChange, checked, indeterminate }) => {
  return (
    <div className={styles.selectAll} onClick={onChange}>
      <Checkbox
        onChange={onChange}
        checked={checked}
        indeterminate={indeterminate}
      />
      <span>{"Select all"}</span>
    </div>
  );
};
