import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { FINANCIALINSTRUMENT_TITLE_FIELD } from "../financialInstrument/FinancialInstrumentTitle";

export const PriceRecordList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"PriceRecords"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="asOf" source="asOf" />
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="FinancialInstrument"
          source="financialinstrument.id"
          reference="FinancialInstrument"
        >
          <TextField source={FINANCIALINSTRUMENT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="payload" source="payload" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
