import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { FINANCIALINSTRUMENT_TITLE_FIELD } from "../financialInstrument/FinancialInstrumentTitle";

export const PriceRecordShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
