import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { BATCHRUN_TITLE_FIELD } from "../batchRun/BatchRunTitle";

export const BatchRunRecordList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"BatchRunRecords"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <ReferenceField
          label="BatchRun"
          source="batchrun.id"
          reference="BatchRun"
        >
          <TextField source={BATCHRUN_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="priceRecord" source="priceRecord" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
