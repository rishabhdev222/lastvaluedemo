import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { BatchRunTitle } from "../batchRun/BatchRunTitle";

export const BatchRunRecordEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
