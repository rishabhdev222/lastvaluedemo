import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { BatchRunTitle } from "../batchRun/BatchRunTitle";

export const BatchRunRecordCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="batchRun.id"
          reference="BatchRun"
          label="BatchRun"
        >
          <SelectInput optionText={BatchRunTitle} />
        </ReferenceInput>
        <div />
      </SimpleForm>
    </Create>
  );
};
