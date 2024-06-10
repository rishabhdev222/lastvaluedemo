import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { FinancialInstrumentTitle } from "../financialInstrument/FinancialInstrumentTitle";

export const PriceRecordCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="asOf" source="asOf" />
        <ReferenceInput
          source="financialInstrument.id"
          reference="FinancialInstrument"
          label="FinancialInstrument"
        >
          <SelectInput optionText={FinancialInstrumentTitle} />
        </ReferenceInput>
        <div />
      </SimpleForm>
    </Create>
  );
};
