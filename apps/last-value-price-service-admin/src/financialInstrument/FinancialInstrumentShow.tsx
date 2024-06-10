import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { FINANCIALINSTRUMENT_TITLE_FIELD } from "./FinancialInstrumentTitle";

export const FinancialInstrumentShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="PriceRecord"
          target="financialInstrumentId"
          label="PriceRecords"
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
